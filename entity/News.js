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
    title: sequelize.STRING,
    content: sequelize.STRING,
    status: sequelize.INTEGER,
    entrydate: sequelize.DATE
};

const options = {
    tableName: "tiny_news",
    createdAt: false,
    updatedAt: false,
    deletedAt: false
};

const news = sequelizeDao.connections.define('News', attributes, options);
module.exports = news;



