// Conexion a nuestra base de datos MySQL utilizando Sequelize para la creacion de la base y tablas.

const Sequelize = require('sequelize');
const FoldersModel = require('./models/folders')
const UsersModel = require("./models/users")
const MessagesModel = require("./models/messages")
const MessageUsersModel = require("./models/messageUsers")


// Conexion a la base de datos.

const sequelize = new Sequelize("teknosbd", "root", "acamica",{
    host: "localhost",
    dialect: "mysql"
});

// Mapeo de tablas

const Folders = FoldersModel(sequelize, Sequelize)
const Users = UsersModel(sequelize, Sequelize)
const Messages = MessagesModel(sequelize, Sequelize)
const MessageUsers = MessageUsersModel(sequelize, Sequelize)

Messages.belongsTo(Users, {
    as: "From",
    foreignKey: "from"
} )

Messages.belongsTo(Users, {
    as: "To",
    foreignKey: "to"
})

Users.hasMany(Messages, {
    as: "Messages",
    foreignKey: "id_message"
})


sequelize.sync({ alter: true }).then(() => { // Que hace 'force' ?
    console.info('Las tablas fueron sincronizadas correctamente.')
}).catch(console.error)

module.exports = {
    sequelize,
    Folders,
    Users,
    Messages,
    MessageUsers
}
