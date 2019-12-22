
let endpoint;
let tmpAry = [];
if (location.hostname.indexOf("127.0.0.1") != -1) 
endpoint = 
    "../js/cities.json";
else 
endpoint =
    "https://gist.github.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => tmpAry.push(...data));

const cities = tmpAry;

let init = function() {
    setAllListener();
};

let setAllListener = function () {
    const inp = document.querySelector(".search");
    inp.addEventListener("input", setCustomListener(doInputMethods, inp, {}));
}

let setCustomListener = function(methods, instances) {
    let args = sliceAry(arguments, 2);
    return (instances == undefined) 
    ? function(){methods.apply(this, sliceAry(arguments, 0).concat(args))} 
    : function(){methods.apply(instances, sliceAry(arguments, 0).concat(args))};
};

let sliceAry = function (argAry,indices) {
    if (indices == null) indices = 0;
    let newAry;
    try {
        newAry = Array.prototype.slice.call(argAry, indices);
    } catch (e) {
        newAry = new Array(argAry.length - indices);
        for (var i = indices, j = 0; i < argAry.length; ++i, ++j) {
            newAry[j] = argAry[i];
        }
    }
    return newAry;
}

let doInputMethods = function (e,dataObj) {
    const val = this.value;
    let ul = document.querySelector(".ul-sugg");
    let serchObj = findMatches(val, cities);
    let liStr = "";
    if (val){
        serchObj.forEach(ele => {
            liStr += 
            `<li>
            <span class="name">${ele.city} ${ele.state}</span>
            <span class="population">${numberWithCommas(ele.population)}</span>
            </li>`;
        });
    }
    ul.innerHTML = liStr;
    
}

let findMatches = function( worldToMatch, cities) {
    return cities.filter( place =>{
        const regex = new RegExp(worldToMatch,'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

let numberWithCommas = function (strNum) {
    return strNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}