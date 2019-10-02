'use strict';

var userName = prompt('Hey! What\'s your name ?');
// console.log('userName: ', userName);

alert('Welcome ' + userName + '!');

var myName = prompt('Let\'s check you! My name is Kate?');
// console.log('myName: ', myName);

myName = myName.toLowerCase();
if (myName === 'yes' || myName === 'y') {
  alert('Yeeeah');
} else {
  alert('Ooooops, not correct!');
}

var myColor = prompt('My favorite color is orange?');
// console.log('myColor: ', myColor);

myColor = myColor.toLowerCase();
if (myColor === 'no' || myColor === 'n') {
  alert('Yeeeah, you are right!');
} else {
  alert('Nope, I don\'t like orange color! My favorite is white.');
}

var nativeLanguage = prompt('My native language is Russian?');
// console.log('nativeLanguage: ' , nativeLanguage);

nativeLanguage = nativeLanguage.toLowerCase();
if (nativeLanguage === 'no' || nativeLanguage === 'n') {
  alert('Yep, my native language is Ukranian');
} else {
  alert('Nope, I speak Russian but my native is Ukranian.');
}

var pets = prompt('Do I have any pets?');
// console.log('pets: ' , pets);

pets = pets.toLowerCase();
if (pets === 'no' || pets === 'n') {
  alert('Correct, unfortunately I don\'t have any.');
} else {
  alert('I would love to have some, but no.');
}

var likeToBeHere = prompt('Am I happy to be here?');
// console.log('likeToBeHere: ', likeToBeHere);

likeToBeHere = likeToBeHere.toLowerCase();
if (likeToBeHere === 'yes' || likeToBeHere === 'y') {
  alert('Yaaaay, I\'m really happy to be here with all of you!!!!');
} else {
  alert('No, No, No. It\'s impssible!');
}

alert('Thank you ' + userName + ' for taking small quiz about me, hope ypu had fun and you\'ll know me better!');
