var sequelize = require('sequelize');
var sequelizeDao = require('../dao/SequelizeDao');

const attributes = {
    id: {
        type: sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    vipCardId: {
        field: "vip_card_id",
        type: sequelize.BIGINT
    },
    originalPrice: {
        field: "original_price",
        type: sequelize.DECIMAL
    },
    payPrice: {
        field: "pay_price",
        type: sequelize.DECIMAL
    },
    discount: sequelize.DECIMAL,
    entrydate: sequelize.DATE
};

const options = {
    tableName: "tiny_vip_consumer_record",
    createdAt: false,
    updatedAt: false,
    deletedAt: false
};

const vipConsumerRecord = sequelizeDao.connections.define('VipConsumerRecord', attributes, options);
module.exports = vipConsumerRecord;

