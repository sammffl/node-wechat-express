// window.addEventListener("devicemotion", function (event) {
//     var eventacceleration = event.acceleration;
//     document.querySelector('#devicemotion').innerHTML = "acceleration:<br>" +
//         eventacceleration.x + "<br>" +
//         eventacceleration.y + "<br>" +
//         eventacceleration.z
// }, false);


function formatNum(num) {
    return num.toString().length < 2 ? 0 + '' + num : num;
}

tick(function () {

    var date = new Date();
    var year = date.getFullYear();
    var month = formatNum(date.getMonth() + 1);
    var day = formatNum(date.getDate());
    var hours = formatNum(date.getHours());
    var minutes = formatNum(date.getMinutes());
    var seconds = formatNum(date.getSeconds());

    document.querySelector('#devicemotion').innerHTML = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
});

