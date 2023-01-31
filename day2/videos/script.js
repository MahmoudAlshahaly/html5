var video = document.getElementById("video")
function playpause() {
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
}

function makebig(){
    video.style.width ="1000px";
    video.style.height ="800px";

}

function makesmall(){
    video.style.width ="400px";
    video.style.height ="300px";

}


function makenormal(){
    video.style.width ="800px";
    video.style.height ="600px";

}