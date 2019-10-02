'use strict';

var userName = prompt('Hey! What\'s your name ?');
// console.log('userName: ', userName);

alert('Welcome ' + userName + '!');

var myName = prompt('Let\'s check you! My name is Kate?');
// console.log('myName: ', myName);

var rightAnswerCount = 0;
myName = myName.toLowerCase();
if (myName === 'yes' || myName === 'y') {
  alert('Yeeeah');
  rightAnswerCount++;
} else {
  alert('Ooooops, not correct!');
}

var myColor = prompt('My favorite color is orange?');
// console.log('myColor: ', myColor);

myColor = myColor.toLowerCase();
if (myColor === 'no' || myColor === 'n') {
  alert('Yeeeah, you are right!');
  rightAnswerCount++;
} else {
  alert('Nope, I don\'t like orange color! My favorite is white.');
}

var nativeLanguage = prompt('My native language is Russian?');
// console.log('nativeLanguage: ' , nativeLanguage);

nativeLanguage = nativeLanguage.toLowerCase();
if (nativeLanguage === 'no' || nativeLanguage === 'n') {
  alert('Yep, my native language is Ukranian');
  rightAnswerCount++;
} else {
  alert('Nope, I speak Russian but my native is Ukranian.');
}

var pets = prompt('Do I have any pets?');
// console.log('pets: ' , pets);

pets = pets.toLowerCase();
if (pets === 'no' || pets === 'n') {
  alert('Correct, unfortunately I don\'t have any.');
  rightAnswerCount++;
} else {
  alert('I would love to have some, but no.');
}

var likeToBeHere = prompt('Am I happy to be here?');
// console.log('likeToBeHere: ', likeToBeHere);

likeToBeHere = likeToBeHere.toLowerCase();
if (likeToBeHere === 'yes' || likeToBeHere === 'y') {
  alert('Yaaaay, I\'m really happy to be here with all of you!!!!');
  rightAnswerCount++;
} else {
  alert('No, No, No. It\'s impssible!');
}

alert('Hey, now we\'ll play a new game. Rules are super easy, you should to try guess a number.');


for (var i = 0; i < 4; i++ ) {
  var myAge = prompt('How old am I?');
  myAge = parseInt(myAge);
  if (myAge === 25) {
    alert('You are right!');
    rightAnswerCount++;

  } else if (myAge < 25) {
    alert('Too low');
  } else {
    alert('Wow, to hight!');
  }
}
//console.log(typeof myAge);


// var language = prompt('How many languages I speak?');
// language = parseInt(language);
// if (language === 3) {
//   alert('You are right! I speak Ukranian, Russian and English');
//   rightAnswerCount++;

// } else if (language < 3) {
//   alert('Too low, I speak 3.');
// } else {
//   alert('Wow, to hight, I would like to!');
// }
// //console.log('language:' , language);

// var statesVisited = prompt('I loveeee traveling! What do you think, how many states I visited in US?');
// statesVisited = parseInt(statesVisited);
// if (statesVisited === 10) {
//   alert('You are right!');
//   rightAnswerCount++;
// }

// else if (statesVisited < 10) {
//   alert('Too low');
// } else {
//   alert('Wow, to hight!');
// }
// //console.log('statesVisited:' , statesVisited);


// var family = prompt('How many brothers and sisters I have?');
// family = parseInt(family);
// if (family === 1) {
//   alert('You are right!');
//   rightAnswerCount++;
// } else if (family < 1) {
//   alert('Too low');
// } else {
//   alert('Wow, to hight!');
// }
// //console.log('family:' , family);

// var jobs = prompt('How many jobs I had before came to school?');
// jobs = parseInt(jobs);
// if (jobs === 13) {
//   alert('You are right!');
//   rightAnswerCount++;
// } else if (jobs < 13) {
//   alert('Too low, I changed 13 jobs bafore came here.');
// } else {
//   alert('Wow, to hight! Impossible, I\'m to young');
// }
// //console.log('jobs:' , jobs);

// var tattoo = prompt('How many tatto I have ?');
// tattoo = parseInt(tattoo);
// if (tattoo === 2) {
//   alert('You are right!');
//   rightAnswerCount++;
// } else if (jobs < 2) {
//   alert('Too low, I changed 13 jobs bafore came here.');
// } else {
//   alert('Wow, to hight! Impossible, I\'m to young');
// }
//console.log('tattoo:', tattoo);

alert('Hey, you got ' + rightAnswerCount + ' correct answers, congradulations!!!');

alert('Thank you ' + userName + ' for taking small quiz about me, hope you had fun and you\'ll know me better!');
