
const keyAry = [];
const secretCode = "apple";

const keydownListener = function (e) {
    const keychart = e.key;
    if (!/[a-zA-Z0-9]/g.test(keychart) || keychart.length != 1) return;
    keyAry.push(e.key);
    keyAry.splice(-secretCode.length - 1, keyAry.length - secretCode.length);
    viewPressed(keyAry.join(","));
    keyAry.join('') === secretCode ? cornify_add() : '';
}

const viewPressed = function(keyStr) {
    const viewSpan = document.querySelector("#text");
    viewSpan.innerText = keyStr;
};



window.addEventListener("keydown", keydownListener);