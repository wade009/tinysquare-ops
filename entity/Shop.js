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
    avator: sequelize.STRING,
    name: sequelize.STRING,
    mobile: sequelize.STRING,
    tel: sequelize.STRING,
    address: sequelize.STRING,
    brief: sequelize.STRING,
    description: sequelize.STRING,
    favorite_count: sequelize.STRING,
    longitude: sequelize.DOUBLE,
    latitude: sequelize.DOUBLE,
    status: sequelize.INTEGER,
    entrydate: sequelize.DATE
};

const options = {
    tableName: "tiny_shop",
    createdAt: false,
    updatedAt: false,
    deletedAt: false
};

const shop = sequelizeDao.connections.define('Shop', attributes, options);
module.exports = shop;


