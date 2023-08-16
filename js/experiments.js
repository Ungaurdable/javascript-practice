// my first time doing JavaScript :)

let myFirstName = `Kavin`;
let myLastName = `Kumanan`;

// let sentence = "Hello " + firstName + " " + lastName + "! How are you!?";

let sentenceWithTemplate = `Hello ${myFirstName} ${myLastName}! How are you!?`;

// console.log(sentence);

console.log(sentenceWithTemplate);

// loop exercise CIWDv3 - Javascript

let timesToRepeat = 10;
const character1 = "😈";
const character2 = "🥶";
const character3 = "😡";
const character4 = "🤢";
const character5 = "😶‍🌫️";
const character6 = "🫥";

for (let i = 0; i < timesToRepeat; i++) {
    console.log(character1);
}

while (timesToRepeat > 0) {
    timesToRepeat--;
    console.log(character2);
    // console.log('Ice cold for a while.')
}

timesToRepeat = 10;

let word = '';
for (let i = 20; i > timesToRepeat; i--) {
    word = word + character3;
    console.log(word);
    // console.log('I am so negatively angry!');
}

const character7 = "💀";

let answer = "";
for (let i = 0; i < timesToRepeat; i++) {
    answer = answer + character7;
}

console.log(answer);
console.log(answer);

// Note: Having the console.log outside the block will make it log only once, remember this.

console.log("".padStart(timesToRepeat, character7))

timesToRepeat = 1;

if (timesToRepeat * 2 < 20) {
    console.log(character4);
    console.log('I had too little to eat.');
} else if (timesToRepeat * 2 === 20) {
    console.log(character5);
    console.log('Feeling great out here!')
} else {
    console.log(character6)
    console.log('Not even here no more.');
}

let finalSentence = `Just wanted to end it off on a high note. It's kill time ${character5}${character5}${character5}.`

let sadSentence = `Sorry guys we outta here ${character6}.`;

let imFeeling = 8;

if (imFeeling * 2 < 10) {
    console.log(finalSentence);
} else {
    console.log(sadSentence);
}

// first function practice

let myAge = "15";
let mySchool = "Enloe Magnet High School";
let myFavoriteSport = "Basketball";

function introduction(firstName, lastName, age, school, favoriteSport) {
    // return `Hello, my name is ${firstName} ${lastName}, I am ${age} years old, and I go to ${school}. ${favoriteSport} is my favorite sport.`
    console.log(`Hello, my name is ${firstName} ${lastName}, I am ${age} years old, and I go to ${school}. ${favoriteSport} is my favorite sport.`)
}

// console.log(introduction(myFirstName, myLastName, myAge, mySchool, myFavoriteSport))

introduction(myFirstName, myLastName, myAge, mySchool, myFavoriteSport);

introduction("Steve", "Rogers", "95", "Oak Hill High School", "Wrestling");