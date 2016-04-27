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
    couponId: {
        field: "coupon_id",
        type: sequelize.BIGINT
    },
    status: sequelize.INTEGER,
    entrydate: sequelize.DATE
};

const options = {
    tableName: "tiny_user_coupon",
    createdAt: false,
    updatedAt: false,
    deletedAt: false
};

const userCoupon = sequelizeDao.connections.define('UserCoupon', attributes, options);
module.exports = userCoupon;

