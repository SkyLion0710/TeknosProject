const moment = require('moment')

module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        id_user: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: type.STRING(255),
            allowNull: false
        },
        avatar: {
            type: type.STRING(255),
            allowNull: false
        },
        email: {
            type: type.STRING(255),
            allowNull: false
        },
        createdAt: {
            type: type.DATE,
            default: moment.unix(),
            allowNull: false
        },
        updatedAt:{
            type: type.DATE,
            default: moment.unix(),
            allowNull: false
        }
    })

};