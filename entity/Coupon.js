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
    name: sequelize.STRING,
    img: sequelize.STRING,
    category: sequelize.INTEGER,
    amount: sequelize.DECIMAL,
    startTime: {
        field: "start_time",
        type: sequelize.DATE
    },
    endTime: {
        field: "end_time",
        type: sequelize.DATE
    },
    status: sequelize.INTEGER,
    entrydate: sequelize.DATE
};

const options = {
    tableName: "tiny_coupon",
    createdAt: false,
    updatedAt: false,
    deletedAt: false
};

const coupon = sequelizeDao.connections.define('Coupon', attributes, options);
module.exports = coupon;


