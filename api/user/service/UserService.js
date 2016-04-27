var user = require('../../../entity/User');
var pageUtil = require('../../../util/PageUtil');

function findAll(pageNum, pageSize) {
    var condtions = {
        "where": {},
        "order": "entrydate desc",
        "offset": pageUtil.getPageBegin(pageNum, pageSize),
        "limit": pageSize
    };
    return user.findAll(condtions);
}

function countAll(){
    var condtions = {
        "where": {}
    };
    return user.count(condtions);
}

exports.findAll = findAll;
exports.countAll = countAll;
