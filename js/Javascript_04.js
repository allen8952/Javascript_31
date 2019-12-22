// http://www.randat.com
const people = ["Tess Foster", "Valeria Martin", "Andrew Wright", "Daryl Cameron", "Daniel Elliott", "Sophia Craig", "David Ryan", "Ashton Owens", "Florrie Carroll", "Frederick Walker", "Aiden Watson", "Eric Cunningham", "Brianna Tucker", "Gianna Morris", "Alexia Roberts", "Annabella Higgins", "Melanie Edwards", "Briony Andrews", "Brooke Harrison", "Max Kelly", "Valeria Ellis", "Victor Warren", "Tess Murphy", "Rebecca Campbell", "Arnold Robinson", "Bruce Higgins", "Alina Stewart", "Madaline Cole", "Myra Dixon", "Belinda Warren", "Madaline Cunningham", "Jared Miller", "Deanna Evans", "Alen Perry", "Rosie Barnes", "Vivian Russell", "Michael Ross", "Tyler Sullivan", "Kate Howard", "Brianna Holmes", "Julia Richards", "Edward Johnston", "Jordan Baker", "Chelsea Smith", "Kate Baker", "Wilson Smith", "Justin Ryan", "Maximilian Thomas", "Marcus Grant", "Elian Johnston", "Adelaide Kelly", "Amanda Reed", "Camila Campbell", "Aston Ferguson", "Samantha Perry", "Aiden Anderson", "Victor Wright", "Arianna Montgomery", "Gianna Cooper", "Chester Mason", "Victoria West", "Daisy Ellis", "Chester Howard", "Deanna Clark", "Jared Howard", "Abigail Ryan", "Victor Spencer", "Ted Sullivan", "Sabrina Wright", "Sawyer Harper", "Kellan Harrison", "Alberta Ferguson", "Alen Howard", "Henry Campbell", "Kevin Roberts", "Caroline Stevens", "Jacob Richardson", "Alford Johnston", "Jacob Thompson", "Sydney Parker", "Alisa Campbell", "Dainton Robinson", "Harold Ryan", "Cadie Chapman", "Walter Johnston", "Julia Allen", "Vincent Fowler", "Dainton Morris", "Brad Elliott", "Amanda Alexander", "Alfred Andrews", "Nicole Wright", "Michael Carter", "Carl Dixon", "Savana Edwards", "Leonardo Thomas", "Alisa Dixon", "Fiona Perry", "Rebecca Allen", "Adele Stewart", "Brooke Allen", "Amelia Cole", "Agata Evans", "Preston Spencer", "Roland Turner", "Brooke Morris", "Oliver Cunningham", "Patrick Hawkins", "Eleanor Johnson", "Valeria Reed", "Miley Richards", "Olivia Watson", "Ted Russell", "Lydia Brown", "Alen Reed", "Carlos Ferguson", "Alexander Morris", "Savana Smith", "Aida Morrison", "Spike Taylor", "Sydney West", "Vivian Richards", "Ryan Murray", "James Murphy", "William Scott", "Roland Richardson", "Miranda Mitchell", "Garry Cunningham", "Amy Miller", "Sam Wilson", "Tess Carroll", "Darcy Alexander", "Briony Harrison", "Steven Ryan", "Rosie Alexander", "Alfred Robinson", "Kristian Warren", "Jenna Ellis", "Carl Montgomery", "Daryl Cooper", "Anna Johnston", "Eddy Cooper", "Albert Williams", "Alan Crawford", "Tyler Alexander", "Lucy Lloyd", "Aldus Adams", "Darcy Wilson", "Amber Riley", "Tony Taylor", "Garry Johnson", "Maya Russell", "Carlos Williams", "Briony Murphy", "Kimberly Hunt", "James Crawford", "Emma Cunningham", "Rafael Russell", "Jasmine Casey", "Sydney Ellis", "Natalie Payne", "Sawyer Rogers", "Sienna Andrews", "Arnold Johnston", "Alan Perkins", "James Turner", "Sam Riley", "Albert Kelley", "Robert Cunningham", "Adelaide Perkins", "Lana Casey", "Rebecca Thompson", "Amelia Spencer", "Jenna Higgins", "Lilianna Mitchell", "Edwin Allen", "Ashton Scott", "Penelope Jones", "Tiana Murphy", "Aston Ellis", "Mike Casey", "Arthur Campbell", "Ellia Scott", "Arthur Riley", "Emma Robinson", "Owen West", "Roland Campbell", "Rafael Murray", "Catherine Turner", "Rafael Morgan", "Sawyer Campbell", "Martin Carroll", "Anna Watson", "Adelaide Harris", "Arianna Ellis", "Alan Hamilton", "Jacob Ellis", "Maximilian Richardson", "Anna Douglas", "Brad Casey" ];
const invetors = [
    {"first":"Ned", "last": "Anderson", "age":"18", "passed":"193"},
    {"first":"Honey", "last": "Jones", "age":"24", "passed":"319"},
    {"first":"James", "last": "Crawford", "age":"21", "passed":"994"},
    {"first":"Max", "last": "Davis", "age":"27", "passed":"220"},
    {"first":"Charlie", "last": "Cameron", "age":"28", "passed":"364"},
    {"first":"Charlie", "last": "Payne", "age":"28", "passed":"864"},
    {"first":"Aston", "last": "Morrison", "age":"29", "passed":"650"},
    {"first":"Sophia", "last": "Gibson", "age":"23", "passed":"746"},
    {"first":"Emma", "last": "Alexander", "age":"28", "passed":"373"},
    {"first":"Victor", "last": "Richards", "age":"18", "passed":"144"},
    {"first":"Maria", "last": "Douglas", "age":"19", "passed":"814"},
    {"first":"Haris", "last": "Barnes", "age":"20", "passed":"494"},
    {"first":"Aida", "last": "Mitchell", "age":"20", "passed":"675"},
    {"first":"James", "last": "Mason", "age":"27", "passed":"243"},
    {"first":"Alexia", "last": "Payne", "age":"26", "passed":"455"},
    {"first":"Olivia", "last": "Anderson", "age":"19", "passed":"470"},
    {"first":"Edgar", "last": "Casey", "age":"25", "passed":"125"},
    {"first":"Hailey", "last": "Russell", "age":"26", "passed":"319"},
    {"first":"Amelia", "last": "Gibson", "age":"28", "passed":"733"},
    {"first":"Penelope", "last": "Turner", "age":"23", "passed":"507"}
];

console.log("invetors:", invetors);

//1.filter

const socialman = invetors.filter(
    invetor => invetor.age > 20 && invetor.age < 25
);
console.log("socialman:");
console.table(socialman);

//2.map

const fullName = invetors.map(invetor => `${invetor.first} ${invetor.last}`);

console.log("fullName:", fullName);

//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// var a = document.querySelector(".mw-category");
// var b = [...a.querySelectorAll("a")];  or
// var b = Array.from(a.querySelectorAll("a"));
// var contentAry = b.map(dom => dom.textContent);
//3.sort

const olders = invetors.sort((a, b) => a.age > b.age ? 1 : -1);

console.log("olders:", olders);

//4.reduce

const totalAge = invetors.reduce((total, invetor) => {
    return total + (invetor.passed - invetor.age);
}, 0);

console.log("totalAge:", totalAge);


const countAge = invetors.reduce(function(obj, invetor) {
    if(!obj[invetor.age]) obj[invetor.age] = 0;
    obj[invetor.age]++;
    return obj;
}, {});

console.log("countAge:",countAge);