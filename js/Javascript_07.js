const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 }
];
const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 }
];
console.log("people:", people);
//1. some
console.log("Use Array.some:");
const adult = people.some(args => (new Date()).getFullYear() - args.year >= 20);
console.log("people.some >= 20:", adult);

//2. every
console.log("Use Array.every:");
const AllAdult = people.every(args => (new Date()).getFullYear() - args.year >= 20);
console.log("people.every >= 20:", AllAdult);

console.log("comments:", comments);
//3.find
console.log("Use Array.find: find id = 123523 of Object");
const comment = comments.find(args => args.id === 123523);
console.log("comment",comment);

//4.findIndex
console.log("Use Array.findIndex: find id = 123523 of index");
const idx = comments.findIndex(args => args.id === 123523);
console.log("idx:", idx);