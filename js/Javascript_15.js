const sub = document.querySelector("form");
const viewList = document.querySelector(".cafe_frame ul");
const items = JSON.parse(localStorage.getItem("items")) || [];

let addItem = function (e) {
    e.preventDefault();
    const text = this.querySelector("[name='text']").value;
    const obj = {
        text,
        done: false
    };
    items.push(obj);
    generateList(items, viewList);
    localStorage.setItem("items", JSON.stringify(items));
    this.reset();
}

let generateList = function(items = [], viewList) {
    viewList.innerHTML = items.map((itemObj, idx) => {
            return `<li>
                    <input type="checkbox" data-index="${idx}" id="item${idx}" ${itemObj.done ? 'checked' : ''}>
                    <label for="item${idx}">${itemObj.text}</label>
                    </li>`;
                    }).join("");
    
};

let clickDown = function (e) {
    if(!e.target.matches("input")) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index]["done"] = !items[index]["done"];
    localStorage.setItem("items", JSON.stringify(items));
    generateList(items, viewList);
}
generateList(items, viewList);
sub.addEventListener("submit", addItem);
viewList.addEventListener("click", clickDown);