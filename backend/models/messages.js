const moment = require('moment')

module.exports = (sequelize, type) => {
    return sequelize.define('messages', {
        id_message: {
            type: type.STRING(255),
            primaryKey: true
        },
        from: {
            type: type.INTEGER,
            allowNull: false
        },
        to: {
            type: type.INTEGER,
            allowNull: false
        },
        subject: {
            type: type.STRING(255),
            allowNull: false
        },
        message: {
            type: type.STRING(3000),
            allowNull: false
        },
        time: {
            type: type.STRING(255),
            allowNull: false
        },
        read: {
            type: type.BOOLEAN,
            allowNull: false
        },
        starred: {
            type: type.BOOLEAN,
            allowNull: false
        },
        important: {
            type: type.BOOLEAN,
            allowNull: false
        },
        hasAttachments: {
            type: type.BOOLEAN,
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