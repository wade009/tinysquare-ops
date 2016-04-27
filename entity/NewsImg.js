var sequelize = require('sequelize');
var sequelizeDao = require('../dao/SequelizeDao');

const attributes = {
    id: {
        type: sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    newsId: {
        field: "news_id",
        type: sequelize.BIGINT
    },
    url: sequelize.STRING,
    status: sequelize.INTEGER,
    entrydate: sequelize.DATE
};

const options = {
    tableName: "tiny_news_img",
    createdAt: false,
    updatedAt: false,
    deletedAt: false
};

const newsImg = sequelizeDao.connections.define('NewsImg', attributes, options);
module.exports = newsImg;



