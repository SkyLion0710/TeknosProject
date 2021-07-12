const router = require('express').Router();
const { Folders } = require('../../conexion')

// METODO GET: OBTENER USUARIOS

router.get('/' , async (request, response) => {
    const folders = await Folders.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
    })
    response.send(folders)
})

module.exports = router;