var express = require('express');
var router = express.Router();
var co = require('co');

var userService = require('../api/user/service/UserService');
var pageUtil = require('../util/PageUtil');

router.get('/listPage', function (req, res, next) {
    res.render('user', null);
});

/* GET users listing. */
router.post('/list', function (req, res, next) {
    //res.send('respond with a resource');
    var pageNum = req.body.page;
    pageNum = parseInt(pageNum, 10);
    pageNum = pageNum + 1;
    var pageSize = req.body.size;
    pageSize = parseInt(pageSize, 10);
    var condition = {
        account: req.body.account,
        email: req.body.email,
        token: req.body.token,
        from: req.body.from,
        to: req.body.to
    }
    console.log(condition);
    co(function * (){
        var users = yield userService.findAll(condition, pageNum, pageSize);
        var totalCount = yield userService.countAll(condition);
        var result = {
            "draw": req.body.draw,
            "data": users,
            "recordsTotal": totalCount,
            "recordsFiltered": totalCount
        }
        res.json(result);
    })
    return;
});

module.exports = router;
