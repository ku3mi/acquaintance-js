"use strict";
// Строгий режим


let COLOR_EYES;
let user;
let userName = 'Вася';
user = 'Вася';
console.log(user);
// 
let myLifeStyle = 'freelance';
console.log(myLifeStyle);
// 
let myName = 'Алина',
   myAge = 18,
   myMessage = 'Живи для себя, делай то что хочешь ты';
console.log(myName, myAge, myMessage);

const userProfile = {
   name: 'Alina',
   age: 18,
   myMessage: 'Живи для себя'
}
console.log(userProfile);
userProfile.age = 15;
console.log(userProfile);
userProfile.myMessage = 'ты у себя одна и больше нет никого, цени себя, как ценила других';
console.log(userProfile);



// ТИП BOOLEAN - TRUE OR FALSE
let smileyFace = false;
if (smileyFace) {
   console.log(':)');
} else {
   console.log(':(');
}

let trueOrFalse = 58 > 118;
console.log(trueOrFalse);
// 
let getNan = 'Alina' / 10;
console.log(getNan);
console.log(typeof getNan);
// 
let userNaame = "алина";
console.log(typeof userNaame);
// 
let userInfo = {
   age: 15,
   name: "Alina"
}
console.log(userInfo);
console.log(typeof userInfo);
// 
let userTrue = true;
console.log(userTrue);
console.log(typeof userTrue);

userTrue = String(userTrue);

console.log(userTrue);
console.log(typeof userTrue);
// 
let userNumber = "578";
console.log(userNumber);
console.log(typeof userNumber);

userNumber = Number(userNumber);

console.log(userNumber);
console.log(typeof userNumber);
