/*document.addEventListener('DOMContentLoaded', function() {
let checkbox = document.getElementById('switch').checked;
if(location.href.indexOf('watch') > -1) {
    while(1) {
        window.alert("hi");
    }
}
});*/

function a () {if(location.href.indexOf('watch') != -1 && location.href != 'https://www.youtube.com/watch?v=UnIhRpIT7nc&t=1s') {
location.href="https://www.youtube.com/watch?v=UnIhRpIT7nc&t=1s";
}}

setInterval(a, 2000);
