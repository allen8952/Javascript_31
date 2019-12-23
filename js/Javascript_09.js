//1. Regular
console.log("1.Regular: Hello");
//2. Interpolated
console.log("2. Interpolated:","Hello I am %s!!! ", "Bourne");
//3. Styled
console.log(
    "3. Styled:%c%s%cThis is my Wrold!%c%s%s",
    "font-size:30px;",
    "🏇🏼🏇🏼🏇🏼",
    "background:skyblue;font-size:20px;color:#000",
    "font-size:30px;",
    "🏇🏼🏇🏼🏇🏼",
    "✌🏻✌🏻✌🏻"
);
//4. warning!
console.log("4. warning: console.warning");
console.warn("It never rains but pours.");
//5. Error
console.log("5. Error: console.error");
console.error("The pot calls the kettle black.");
//6. Info
console.info("6. Info:console.info");
console.log("Least said, soonest mended.");
//7. Testing
console.log("7. Testing:console.assert");
console.assert(document.getElementById("bourne"),'This is ampty');
//8. clearing
console.log("8. clearing: console.clear");
// console.clear();

//9. Viewing DOM Elements
console.log("9. Viewing DOM Elements: console.dir");
console.dir(document.getElementById("container"));
//10. Grouping together
console.log("10. Grouping together: console.group console.groupEnd");
const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 }
];
console.log("people", people);

people.forEach( peo => {
    console.group(`${peo.name}`);
    console.log(`This is ${peo.name}`);
    console.log(`${peo.name} was born in ${peo.year}`);
    console.groupEnd(`${peo.name}`);
});
//11. counting
console.log("11. counting: console.count");
console.count("Kait");
console.count("Irv");
console.count("Lux");
console.count("Kait");
console.count("Kait");
console.count("Irv");
console.count("Kait");
console.count("Kait");
console.count("Lux");
//12. timing
console.log("12. timing: console.time , console.timeEnd");
console.log("use fibonacci funcrion do loop i -> 0 ~ 40");
function fibonacci(num) {
    return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}
console.time("fibonacci");
for(let i = 0 ; i < 40 ; i++){
    fibonacci(i);
}
console.timeEnd("fibonacci");