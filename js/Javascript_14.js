// start with strings, numbers and booleans
let money = 100;
let money2 = money;
console.log("money, money2", money, money2);        // => 100 100
money2 = 900;
console.log("money, money2", money, money2);        // => 100 900
console.log("typeof money:",typeof money);          // => number
console.log("money == true:", money == true);       // => false
console.log("!!money == true:", !!money == true);   // => true

let name = "mars";
let name2 = "jupiter";
console.log("name name2:", name, name2);            // => mars jupiter
name2 = "Venus";
console.log("name name2:", name, name2);            // => mars Venus

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const copyAry = players;
console.log("copyAry:", copyAry);                   // => ["Wes", "Sarah", "Ryan", "Poppy"]

// You might think we can just do something like this:
copyAry[3] = "Lucy";
// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
const copyAry2 = players.slice();

// one way
// or create a new array and concat the old one in
const copyAry3 = [].concat(players);

// or use the new ES6 Spread
const copyAry4 = [...players];
copyAry4[3] = "hey youuuuu";
console.log("copyAry4:",copyAry4);                  // => ["Wes", "Sarah", "Ryan", "hey youuuuu"]
console.log("players:",players);                    // => ["Wes", "Sarah", "Ryan", "Lucy"]
// now when we update it, the original one isn't changed
// The same thing goes for objects, let's say we have a person object


// with Objects
const man = {
    name: "Chris Evans",
    age: 39
};

//and think we make a copy:
//const captain = man
//captain.number = 222
// how do we take a copy instead?
const captain = Object.assign({}, man, { number: 222, age: 90 });
console.log("captain:",captain);                     // => {name: "Chris Evans", age: 90, number: 222}
console.log("man:",man);                             // => {name: "Chris Evans", age: 90, number: 222}



// We will hopefully soon see the object ...spread
const captain2 = { ...man };
console.log("captain2:",captain2);                   // => {name: "Chris Evans", age: 90, number: 222}

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const chris = {
    name: "Chris Evans",
    age: 120,
    timezone: { offset: "+7:00", description: "Bangkok, Hanoi, Jakarta" }
};

const dev = Object.assign({}, chris);
dev.timezone.offset = "+8:00";
//is change
console.log("dev:",dev);             // => {name: "Chris Evans", age: 120, timezone: { offset: "+7:00", description: "Bangkok, Hanoi, Jakarta" }}
console.log("chris:",chris);         // => {name: "Chris Evans", age: 120, timezone: { offset: "+7:00", description: "Bangkok, Hanoi, Jakarta" }}

//no change
const dev2 = JSON.parse(JSON.stringify(chris));
dev2.timezone.offset = "-4:00";
console.log("dev2:", dev2);          // => {name: "Chris Evans", age: 120, timezone: { offset: "-4:00", description: "Bangkok, Hanoi, Jakarta" }}
console.log("chris:",chris);         // => {name: "Chris Evans", age: 120, timezone: { offset: "+7:00", description: "Bangkok, Hanoi, Jakarta" }}