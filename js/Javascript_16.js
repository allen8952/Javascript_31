const con = document.querySelector(".container");
const txt = con.querySelector("h1");
const shift = 150;

const mousemoveListener = function (e) {

    const { offsetWidth: width, offsetHeight: height } = con;
    let { offsetX: x, offsetY: y } = e ;

    if(e.target !== this){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xPosition = Math.round((x / width) * shift - (shift / 2));
    const yPosition = Math.round((y / height) * shift - (shift / 2));

    txt.style.textShadow = `
        ${xPosition}px ${yPosition}px 0 rgba(247, 215, 148,1.0),
        ${xPosition * -1}px ${yPosition}px 0 rgba(119, 139, 235,1.0),
        ${yPosition}px ${xPosition * -1}px 0 rgba(234, 134, 133,1.0),
        ${yPosition * -1}px ${xPosition}px 0 rgba(89, 98, 117,1.0)
    `;
}

con.addEventListener("mousemove", mousemoveListener);