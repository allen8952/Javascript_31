const dt = [...document.querySelectorAll("[data-time]")];
let editTime;
let seconds;

const secMethod = function() {
    seconds = dt
        .map(node => node.dataset.time)
        .map(time => {
            const [min, sec] = time.split(":").map(parseFloat);
            return min * 60 + sec;
        })
        .reduce((acc, val) => acc + val);
};

const getTotalTime = function () {
    let secondsTotals = seconds;
    let hours = Math.floor(secondsTotals / 3600);
    secondsTotals = secondsTotals % 3600;
    let min = Math.floor(secondsTotals / 60);
    let sec = secondsTotals % 60;

    hours = hours < 9 ? "0" + hours : hours;
    min = min <= 9 ? "0" + min : min;
    sec = sec <= 9 ? "0" + sec : sec;

    document.querySelector("#numtotal").innerText =
        hours + ":" + min + ":" + sec;
}

const blurSpan = function () {
    let [min, sec] = this.innerText.split(":").map(parseFloat);
    min = min < 60 ? min : editTime.split(":")[0];
    sec = sec < 60 ? sec : editTime.split(":")[1];
    min = min <= 9 ? "0" + min*1 : min;
    sec = sec <= 9 ? "0" + sec*1 : sec;
    this.innerText = min + ":" + sec ;
    this.parentElement.dataset.time = min + ":" + sec;
    secMethod();
    getTotalTime();
    editTime = null;
}

const focusSpan = function() {
    editTime = this.parentElement.dataset.time;
};

dt.forEach( dom => {
    let [min, sec] = dom.dataset.time.split(":").map(parseFloat);
    min = min <= 9 ? "0" + min : min;
    sec = sec <= 9 ? "0" + sec : sec;
    dom.querySelectorAll("span")[2].innerText = min + ":" + sec ;
    dom.querySelectorAll("span")[2].addEventListener("focus", focusSpan);
    dom.querySelectorAll("span")[2].addEventListener("blur", blurSpan);
});


secMethod();
getTotalTime();
