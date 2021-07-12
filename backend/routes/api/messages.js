const router = require('express').Router();
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { Messages, Users, sequelize } = require('../../conexion')

// METODO GET: OBTENER TODOS LOS MAILS

router.get('/' , async (request, response) => {
    const messages = await Messages.findAll({
        attributes: { exclude: ["createdAt", "updatedAt", "from", "to"] },
        include: [{
            model: Users,
            as: "From",
            attributes: { exclude: ["id_user", "createdAt", "updatedAt"] }
        },
        {
            model: Users,
            as: "To",
            attributes: { exclude: ["id_user","createdAt", "updatedAt"] }
        }
        ]
    })
    response.send(messages)
})

// METODO GET: OBTENER TODOS LOS MAILS IMPORTANTES

router.get(`/important` , async (request, response) => {

    var from = request.query.from 
    var to = request.query.to
    var subject = request.query.subject
    var whereStatement2 = {}
    if(from !== null){
        whereStatement2.name = { [Op.like]: `%${from}%`}
    }
    var whereStatement3 = {}
    if(to !== null){
        whereStatement3.name = { [Op.like]: `%${to}%`}
    }

    const messages = await Messages.findOne({
        where: {
            important: true,
            subject: {
                
                [Op.like]: `%${subject}%`
            }
        },
        attributes: { exclude: ["createdAt", "updatedAt", "from", "to"] },
        include: [{
            model: Users,
            as: "From",
            attributes: { exclude: ["id_user", "createdAt", "updatedAt"] },
             where: whereStatement2
        },
        {
            model: Users,
            as: "To",
            attributes: { exclude: ["id_user","createdAt", "updatedAt"] },
            where: whereStatement3
        }
        ]
    })
    response.send(messages)
})

// METODO DELETE: BORRAR UN MAIL

router.delete(`/important/:id` , async (request, response) => {
    
    try
    {
        await Messages.destroy({
            where: { id_message: request.params.id}
        })
        response.json({ success: "Mensaje eliminado."})
    } catch (err) {
        response.json({ error: "Se ha producido un error"})
    }

})

// METODO POST: CREAR UN MAIL

// METODO POST: Crear Nuevo Producto (http://localhost:3000/v1/api/productos)
router.post('/important', async (request, response) => {

    const mensaje = await Messages.create(request.body);
    response.json(mensaje)
})

module.exports = router;