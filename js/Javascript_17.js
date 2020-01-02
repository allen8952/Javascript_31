const bands = [
    "The Plot in You",
    "The Devil Wears Prada",
    "Pierce the Veil",
    "Norma Jean",
    "The Bled",
    "Say Anything",
    "The Midway State",
    "We Came as Romans",
    "Counterparts",
    "Oh, Sleeper",
    "A Skylit Drive",
    "Anywhere But Here",
    "An Old Dog"
];

const filterPrefix = function(str) {
    return str.replace(/^(a |the |an )/gi, "").trim();
}

document.querySelector("#origin").innerHTML = bands.map(band => "<li>" + band + "</li>").join("");

const soetedBands = bands.sort( (a,b) => filterPrefix(a) > filterPrefix(b) ? 1 : -1);

document.querySelector("#new").innerHTML = soetedBands.map(band => "<li>" + band + "</li>").join("");
