document.querySelector('#wxMessage').innerHTML = '页面ready';


var imgUrl = "http://im-core-share.pingan.com.cn:30111/dispatch/downloadredirect?queryType=download&string=953ce91d27faa634ba5be8eb4a49760c6c7:1:10:SZ:::0:0:GBD_CREDITCONSOLE:V_PA025_GBD_CREDITCONSOLE&token_type=1&digest=FX4KeWcCOvwFm-EAdpPBa1eCGhuJeGjtMUhLrkLgz/2pC7s9B77TsKRFGfW3xoAlo2/rHbwrbYj9yHhDsK4omMH8KHsMh-GpNQmZJ5DBVnupSvtczIcNl7X0miUO4GFt1AxEIudhKA2unypCobsEFZWeeUmMhkR78B1K0JI-zgg~&csprgwflag=$003&biztype=GBD_CREDITCONSOLE&downloadflag=HC&docname=120cm800.jpg&download=attachment";  //注意必须是绝对路径
// var lineLink = "http://172.18.19.20:3000/";   //同样，必须是绝对路径
var lineLink = "http://www.baidu.com";
var descContent = '卡多？密码多？忘还款？一账通APP帮您“一站式”解决，一个就够了'; //分享给朋友或朋友圈时的文字简介
var shareTitle = '一账通APP';  //分享title
var appid = ''; //apiID，可留空

function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage', {
        "appid": appid,
        "img_url": imgUrl,
        "img_width": "120",
        "img_height": "122",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function (res) {
        //_report('send_msg', res.err_msg);
        alert(res);
    })
}

function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline', {
        "img_url": imgUrl,
        "img_width": "120",
        "img_height": "122",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function (res) {
        //_report('timeline', res.err_msg);
        alert(res);
    });
}

// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {

    document.querySelector('#wxMessage').innerHTML = '触发WeixinJSBridgeReady';

    // WeixinJSBridge.call('hideOptionMenu');

    // 发送给好友
    WeixinJSBridge.on('menu:share:appmessage', function (argv) {
        alert(1);
        shareFriend();
    });
    // 分享到朋友圈
    WeixinJSBridge.on('menu:share:timeline', function (argv) {
        alert(2);
        shareTimeline();
    });

}, false);

document.querySelector('#wxMessage').innerHTML = '存在WeixinJSBridge，设置监听';


//
try {
    if (!!window.WeixinJSBridge) {
        // initWXJSBridge();
    } else {
        document.querySelector('#wxMessage').innerHTML = '没有WeixinJSBridge';
    }

} catch (e) {
    console.log(e)
    document.querySelector('#wxMessage').innerHTML = e;
}
