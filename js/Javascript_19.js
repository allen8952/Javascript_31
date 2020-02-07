const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext('2d');
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");
const tkBtn = document.querySelector(".tkBtn");
video.addEventListener("canplay", paintToCanavas);
tkBtn.addEventListener("click", takePhoto);
function getVideo() {

    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
        try {
            video.srcObject = localMediaStream;
        } catch (error) {
            video.src = window.URL.createObjectURL(localMediaStream);
        }
        video.play();
    })
    
}

function paintToCanavas() {
    const [width,height] = [video.videoWidth, video.videoHeight];
    canvas.width = width;
    canvas.height = height;
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0, 0, width, height);
        // pixels = redEffect(pixels);
        // pixels = rgbSplit(pixels);
        pixels = greenScreen(pixels);
        // ctx.globalAlpha= 0.3;
        
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function takePhoto() {
    snap.currentTime = 0 ;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement("a");
    link.href = data;
    link.setAttribute("Donwload", "hansome");
    link.textContent = "download";
    link.innerHTML = `<img src="${data}" alt="Handsome Man">`
    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixel) {
    for(let i = 0 ; i < pixel.data.length ; i+=4){
        pixel.data[i] = pixel.data[i] + 50;          //red
        pixel.data[i + 1] = pixel.data[i + 1] + 50;  //grren
        pixel.data[i + 2] = pixel.data[i + 2] + 0;  //blue
    }
    return pixel;
}

function rgbSplit(pixel) {
    for (let i = 0; i < pixel.data.length; i += 4) {
        pixel.data[i - 150] = pixel.data[i];        //red
        pixel.data[i + 500] = pixel.data[i + 1];    //grren
        pixel.data[i - 550] = pixel.data[i + 2];    //blue
    }
    return pixel;
}

function greenScreen(pixel) {
    let levels = {};
    
    document.querySelectorAll(".rgb input").forEach( dom => levels[dom.name] = dom.value );
    for (let i = 0; i < pixel.data.length; i += 4) {
        red = pixel.data[i];
        green = pixel.data[i + 1];
        blue = pixel.data[i + 2];
        if (
            red >= levels.rmin &&
            red <= levels.rmax &&
            green >= levels.gmin &&
            green <= levels.gmax &&
            blue >= levels.bmin &&
            blue <= levels.bmax
        ) {
            pixel.data[i + 3] = 0;
        }
    }
    return pixel;
}

// getVideo();

