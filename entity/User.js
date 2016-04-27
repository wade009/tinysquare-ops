var sequelize = require('sequelize');
var sequelizeDao = require('../dao/SequelizeDao');

const attributes = {
    id: {
        type: sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    category: sequelize.INTEGER,
    account: sequelize.STRING,
    tel: sequelize.STRING,
    mobile: sequelize.STRING,
    email: sequelize.STRING,
    avatar: sequelize.STRING,
    password: sequelize.STRING,
    platform: sequelize.INTEGER,
    version: sequelize.STRING,
    status: sequelize.INTEGER,
    token: sequelize.STRING,
    entrydate: sequelize.DATE
};

const options = {
    tableName: "tiny_user",
    createdAt: false,
    updatedAt: false,
    deletedAt: false
};

const user = sequelizeDao.connections.define('User', attributes, options);
module.exports = user;


