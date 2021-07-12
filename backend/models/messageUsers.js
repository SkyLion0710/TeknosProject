const moment = require('moment');

module.exports = (sequelize, type) => {
    return sequelize.define('message_users', {
        id_message: {
            type: type.INTEGER,
            primaryKey: true
        },
        id_user: {
            type: type.INTEGER,
            primaryKey: true
        },
        createdAt: {
            default: moment.unix(),
            type: type.DATE
        },
        updatedAt: {
            default: moment.unix(),
            type: type.DATE
        }
    })
};