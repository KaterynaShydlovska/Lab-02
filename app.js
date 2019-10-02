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



var myAge = prompt('How old am I?');
myAge = parseInt(myAge);
if (myAge === 25) {
  alert('You are right!');
}
rightAnswerCount++;

if (myAge < 25) {
  alert('Too low');
}
if (myAge > 25) {
  alert('Wow, to hight!');
}
//console.log(typeof myAge);


var language = prompt('How many languages I speak?');
language = parseInt(language);
if (language === 3) {
  alert('You are right!');
}
rightAnswerCount++;

if (language < 3) {
  alert('Too low');
} else {
  alert('Wow, to hight!');
}
//console.log('language:' , language);




alert('Hey, you got ' + rightAnswerCount + ' correct answers, congradulations!!!');

alert('Thank you ' + userName + ' for taking small quiz about me, hope ypu had fun and you\'ll know me better!');
