const deg = 6;
var init = function () {
    const hr = document.querySelector(".clock-hour");
    const mn = document.querySelector(".clock-minute");
    const sc = document.querySelector(".clock-second");
    setInterval(() => {
        setTime();
    }, 1000);
    function setTime() {
        let dt = new Date();
        let hh = dt.getHours() * 30;
        let mm = dt.getMinutes() * deg;
        let ss = dt.getSeconds() * deg;
        hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
    }
}