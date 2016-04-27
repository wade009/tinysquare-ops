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
    cardNum: {
        field: "card_num",
        type: sequelize.STRING
    },
    img: sequelize.STRING,
    brief: sequelize.STRING,
    points: sequelize.BIGINT,
    user_times: sequelize.INTEGER,
    category: sequelize.INTEGER,
    is_default: sequelize.INTEGER,
    status: sequelize.INTEGER,
    entrydate: sequelize.DATE
};

const options = {
    tableName: "tiny_vip_card",
    createdAt: false,
    updatedAt: false,
    deletedAt: false
};

const vipCard = sequelizeDao.connections.define('VipCard', attributes, options);
module.exports = vipCard;
