let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
let canvas;
let ctx;

let init = function () {
    canvas = document.querySelector("#draw");
    ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.strokeStyle = '#fff0066';
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    // ctx.lineWidth = 100;
    
    setListener();
}

let setListener = function () {
    window.addEventListener("mousemove", draw);
    window.addEventListener("mousedown", (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    window.addEventListener("mouseup", () => isDrawing = false);
    window.addEventListener("mouseout", () => isDrawing = false);
}

let draw = function (e) {
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    if(hue >= 360) hue = 0;
    hue++;

    if (ctx.lineWidth >= 500 || ctx.lineWidth <= 1){
        direction = !direction;
    }
    if (direction) ctx.lineWidth++;
    else ctx.lineWidth--;
}