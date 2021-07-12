const moment = require('moment')

module.exports = (sequelize, type) => {
    return sequelize.define('folders', {
        id_folder: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: type.STRING(255),
            allowNull: false
        },
        title: {
            type: type.STRING(255),
            allowNull: false
        },
        icon: {
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