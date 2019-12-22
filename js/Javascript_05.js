let init = function () {
    let items = document.querySelectorAll(".grid-item");
    items.forEach( item => {
        item.addEventListener("click", callbackListener(item));
    });
}

let doToggle = function (e,target) {
    let cancelAct = document.querySelector(".active");
    if (cancelAct) cancelAct.classList.remove("active");
    if (cancelAct && cancelAct == target) return;
    target.classList.toggle("active");
}

let callbackListener = function () {
    let args = Array.from(arguments);
    return function () {
        return doToggle.apply(args[0], Array.from(arguments).concat(args));
    }
}