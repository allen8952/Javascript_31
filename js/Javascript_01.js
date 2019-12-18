
const keyAry = [
    {
        char: "A",
        keyCode: "65",
        instrument: "CLAP",
        audio_src: "clap.wav"
    },
    {
        char: "S",
        keyCode: "83",
        instrument: "HIHAT",
        audio_src: "hihat.wav"
    },
    {
        char: "D",
        keyCode: "68",
        instrument: "KICK",
        audio_src: "kick.wav"
    },
    {
        char: "F",
        keyCode: "70",
        instrument: "OPENHAT",
        audio_src: "openhat.wav"
    },
    {
        char: "G",
        keyCode: "71",
        instrument: "BOOM",
        audio_src: "boom.wav"
    },
    {
        char: "H",
        keyCode: "72",
        instrument: "RIDE",
        audio_src: "ride.wav"
    },
    {
        char: "J",
        keyCode: "74",
        instrument: "SNARE",
        audio_src: "snare.wav"
    },
    {
        char: "K",
        keyCode: "75",
        instrument: "TOM",
        audio_src: "tom.wav"
    },
    {
        char: "L",
        keyCode: "76",
        instrument: "TINK",
        audio_src: "tink.wav"
    }
];
let keyCodeAry = [];
let init = function () {
    createBox();
};

let createBox = function () {
    let audioDiv = document.querySelector("#audio");
    let container = document.querySelector(".container");
    let cDiv = document.createElement("div");
    let cSpan = document.createElement("span");
    let cAudio = document.createElement("audio");
    let fragmentCont = document.createDocumentFragment();
    let fragmentAudio = document.createDocumentFragment();
    for (let i = 0; i < keyAry.length; i++) {
        let CloneDiv = cDiv.cloneNode(true);
        let CloneAudio = cAudio.cloneNode(true);
        let innerCont;
        const element = keyAry[i];
        CloneDiv.addEventListener("transitionend", setTransitionListener);
        CloneDiv.classList.add("box");
        CloneDiv.setAttribute("data-key", element["keyCode"]);
        innerCont = createContent(cSpan,element["char"], element["instrument"]);
        CloneDiv.appendChild(innerCont);
        fragmentCont.appendChild(CloneDiv);
        keyCodeAry.push(element["keyCode"]);
        
        CloneAudio.setAttribute("data-key", element["keyCode"]);
        CloneAudio.setAttribute("src", "../sounds/" + element["audio_src"]);
        fragmentAudio.appendChild(CloneAudio);
    }
    container.appendChild(fragmentCont);
    audioDiv.appendChild(fragmentAudio);
    window.addEventListener("keydown", setKeyListener);
}

let createContent = function (elsSpan,_topCont,_bottomCont) {
    let fragment = document.createDocumentFragment(),
        CloneSpan_1 = elsSpan.cloneNode(false),
        CloneSpan_2 = elsSpan.cloneNode(false);
        CloneSpan_1.innerHTML = _topCont;
        CloneSpan_1.classList.add("_topCont");
        CloneSpan_2.innerHTML = _bottomCont;
        CloneSpan_2.classList.add("_bottomCont");
    fragment.appendChild(CloneSpan_1);
    fragment.appendChild(CloneSpan_2);
    return fragment;
}

let setKeyListener = function (e) {
    const keyCodeNum = e.keyCode + "";
    if (keyCodeAry.includes(keyCodeNum)) {
        const keyDom = document.querySelector(`.box[data-key="${keyCodeNum}"]`);
        const audioDom = document.querySelector(`audio[data-key="${keyCodeNum}"]`);
        keyDom.classList.add("playing");

        audioDom.currentTime = 0;
        audioDom.play();
    }
}

let setTransitionListener = function (e) {
    if (e.propertyName !== "transform") return;
    const ele = e.target;
    ele.classList.remove("playing");
}