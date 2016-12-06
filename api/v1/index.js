var express = require("express");
var weChatAPI = require("./weChat");
var router = express.Router();
//所有接口介绍
router.get("/", function (req, res, next) {
    var host = req.rawHeaders[1];
    res.send({
        "api_for_wechat_message": host + "/api/v1/getWXMessage",
    })
});

router.get('/getWXMessage', weChatAPI.getWXMessage)

module.exports = router;

