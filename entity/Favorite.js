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
    shopId: {
        field: "shop_id",
        type: sequelize.BIGINT
    },
    status: sequelize.INTEGER,
    entrydate: sequelize.DATE
};

const options = {
    tableName: "tiny_favorite",
    createdAt: false,
    updatedAt: false,
    deletedAt: false
};

const favorite = sequelizeDao.connections.define('Favorite', attributes, options);
module.exports = favorite;

