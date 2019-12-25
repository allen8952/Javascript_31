//"https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164"
let video;
let progress;
let progressBar;
let palyerBtn;
let palyerSider;
let skipButtons;

let init = function () {
    let domain = "https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164";
    document.querySelector("video").src = domain;
    setListener();
}

let setListener = function () {
    video = document.querySelector(".player video");
    progress = document.querySelector(".progress");
    progressBar = document.querySelector(".progress__filled");
    palyerBtn = document.querySelector(".toggle");
    palyerSider = document.querySelectorAll(".player__slider");
    skipButtons = document.querySelectorAll("[data-skip]");
    palyerBtn.addEventListener("click", playVideo);
    skipButtons.forEach(eles => {
        eles.addEventListener("click", skip);
    });

    palyerSider.forEach(eles => {
        eles.addEventListener("change", rangeUpdate);
        eles.addEventListener("mousemove", rangeUpdate);
    });

    window.addEventListener("keydown",(e)=>{
        e.keyCode == 32 ? playVideo():'';
        // e.keyCode == 39 ? video.currentTime += 5:'';
        // e.keyCode == 37 ? video.currentTime -= 5:'';
    })
    video.addEventListener("click", playVideo);
    video.addEventListener("play", upDateBtn);
    video.addEventListener("pause", upDateBtn);
    video.addEventListener("timeupdate", progressing);
    
    let mousedown = false;
    progress.addEventListener("click", scrub);
    progress.addEventListener("mousemove", e => mousedown && scrub(e));
    progress.addEventListener("mousedown", () => (mousedown = true));
    progress.addEventListener("mouseup", () => (mousedown = false));
}

function playVideo (e) {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function upDateBtn(e) {
    const icon = this.paused ? "►" : "❚ ❚";
    palyerBtn.innerHTML = icon;
}

function skip(e) {
    video.currentTime += parseFloat(this.dataset.skip);
}

function rangeUpdate() {
    video[this.name] = this.value;
}

function progressing(e) {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}