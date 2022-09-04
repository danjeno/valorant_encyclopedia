
var video = document.getElementsById("vid");
var butn = document.getElementById("demo")

function Play() {
    if(video.paused) {
        video.play();
      }
      else{
        video.pause();
      }
}
