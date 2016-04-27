var sequelize = require('sequelize');

const URL = "mysql://localhost:3306/tinysquare?useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull";

const CONFIG = {
    username: "root",
    password: "root",
    database: "tinysquare"
};

const CONNECTION_OPTIONS = {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    //queue: false,
    pool: {
        maxConnections: 6,
        minConnections: 3,
        maxIdleTime: 3600000
    }
};

const OPTIONS_QUERY = {
    raw: false,
    transaction: null,
    type: "SELECT"
};

const OPTIONS_UPDATE = {
    raw: false,
    transaction: null,
    type: "BULKUPDATE"
};

const OPTIONS_DELETE = {
    raw: false,
    transaction: null,
    type: "BULKDELETE"
};

var sequelizeConnections = new sequelize(CONFIG.database, CONFIG.username, CONFIG.password, CONNECTION_OPTIONS);

var sequelizeDao = {
    connections: sequelizeConnections,
    query: function (sql) {
        return sequelizeConnections.query(sql, OPTIONS_QUERY);
    },
    update: function (sql) {
        return sequelizeConnections.query(sql, null, OPTIONS_UPDATE);
    },
    delete: function (sql) {
        return sequelizeConnections.query(sql, null, OPTIONS_DELETE);
    }
}

module.exports = sequelizeDao;


