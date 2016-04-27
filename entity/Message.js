var sequelize = require('sequelize');
var sequelizeDao = require('../dao/SequelizeDao');

const attributes = {
    id: {
        type: sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        field: "user_id",
        type: sequelize.BIGINT
    },
    title: sequelize.STRING,
    subject: sequelize.STRING,
    from: sequelize.STRING,
    content: sequelize.STRING,
    status: sequelize.INTEGER,
    entrydate: sequelize.DATE
};

const options = {
    tableName: "tiny_message",
    createdAt: false,
    updatedAt: false,
    deletedAt: false
};

const Message = sequelizeDao.connections.define('Message', attributes, options);
module.exports = Message;
