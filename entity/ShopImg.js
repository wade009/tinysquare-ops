var sequelize = require('sequelize');
var sequelizeDao = require('../dao/SequelizeDao');

const attributes = {
    id: {
        type: sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    shopId: {
        field: "shop_id",
        type: sequelize.BIGINT
    },
    url: sequelize.STRING,
    status: sequelize.INTEGER,
    entrydate: sequelize.DATE
};

const options = {
    tableName: "tiny_shop_img",
    createdAt: false,
    updatedAt: false,
    deletedAt: false
};

const user = sequelizeDao.connections.define('User', attributes, options);
module.exports = user;


