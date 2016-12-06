/**
 * Created by SamMFFL on 2016/12/6.
 */

exports.getWXMessage = function (req, res, next) {

    // todo 请求微信公众号api获得签名
    res.send({
        appId: 'WX21834798',
        signature: 'XXXX',
        timestamp: new Date().getTime()
    })
}