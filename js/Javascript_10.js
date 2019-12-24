
let items;
let inputs;
let lastChecked; 
let init = function () {
    items = document.querySelectorAll(".item");
    inputs = document.querySelectorAll(".item input");
    items.forEach(item => {
        item.addEventListener(
            "click",
            callbackListener(setClick, { inp: item.querySelector("input") })
        );
    });
}

let setClick = function(e, dataObj) {
    let isBetween = false;
    if (e.target !== dataObj["inp"]) dataObj["inp"].checked = !dataObj["inp"].checked;
    if(!dataObj["inp"].checked) return;
    if (e.shiftKey && dataObj["inp"]) {
        inputs.forEach(input => {
            if (input === dataObj["inp"] || input === lastChecked) {
                isBetween = !isBetween;
            }
            if (isBetween) {
                input.checked = true;
            }
        });
    }
    lastChecked = dataObj["inp"];
};

let callbackListener = function (func) {
    let args = Array.from(arguments).slice(1);
    return function () {
        let r = Array.from(arguments);
        return func.apply(this, r.concat(args));
    }
}