var sequelize = require('sequelize');
var sequelizeDao = require('../dao/SequelizeDao');

const attributes = {
    id: {
        type: sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    couponId: {
        field: "coupon_id",
        type: sequelize.BIGINT
    },
    code: sequelize.STRING,
    quantity: sequelize.INTEGER,
    redeem_time: sequelize.DATETIME,
    status: sequelize.INTEGER,
    entrydate: sequelize.DATE
};

const options = {
    tableName: "tiny_coupon_code",
    createdAt: false,
    updatedAt: false,
    deletedAt: false
};

const couponCode = sequelizeDao.connections.define('CouponCode', attributes, options);
module.exports = couponCode;

