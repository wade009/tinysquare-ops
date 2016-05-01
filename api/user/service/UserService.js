var user = require('../../../entity/User');
var pageUtil = require('../../../util/PageUtil');

function findAll(condition, pageNum, pageSize) {
    var condtions = {
        "where": createWhere(condition),
        "order": "entrydate desc",
        "offset": pageUtil.getPageBegin(pageNum, pageSize),
        "limit": pageSize
    };
    return user.findAll(condtions);
}

function countAll(condition) {
    var condtions = {
        "where": createWhere(condition)
    };
    return user.count(condtions);
}

function createWhere(condition) {
    var where = {};
    if (condition.account != null && condition.account != "") {
        where.account = condition.account;
    }
    if (condition.email != null && condition.email != "") {
        where.email = condition.email;
    }
    if (condition.token != null && condition.token != "") {
        where.token = condition.token;
    }
    if (condition.from != null && condition.from != "" && condition.to != null && condition.to) {
        console.log(end);
        where.entrydate = {
            "gte": new Date(condition.from),
            "lte": new Date(condition.to)
        };
    }
    return where;
}

exports.findAll = findAll;
exports.countAll = countAll;
