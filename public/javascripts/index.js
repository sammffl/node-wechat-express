// window.addEventListener("devicemotion", function (event) {
//     var eventacceleration = event.acceleration;
//     document.querySelector('#devicemotion').innerHTML = "acceleration:<br>" +
//         eventacceleration.x + "<br>" +
//         eventacceleration.y + "<br>" +
//         eventacceleration.z
// }, false);


tick(function () {

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    document.st ('#devicemotion').innerHTML = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
});