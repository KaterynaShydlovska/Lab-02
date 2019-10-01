'use strict';

// alert('I am here');
// console.log('I am here');

// var number = 4;
// var string = 'string';
// var boolean = true;

// if (condition is met) {
//     run this code
// } else {
//     run this code
// }

// var likesStrangeThings = promt('Hello, do you like stranger things?');
// // likesStrangeThings = likesStrangeThings.toLowerCase();
// // likesStrangeThings = likesStrangeThings.toUpperCase();

// if (likesStrangeThings === 'yes' || 'YES' || 'Yes'); {
//     alert('Yes, me too!');
// } else {
//     alert('Go wathc it!');
// }


var userName = prompt('Hey! What\'s your name ?');
// console.log('userName: ', userName);

alert('Welcome ' + userName + '!');

var myName = prompt('Let\'s check you! My name is Kate?');
// console.log('Yes, my name is Kate');

myName = myName.toLowerCase();
if (myName === 'yes' || myName === 'y') {
    alert('Yeeeah');
} else {
    alert('Ooooops, not correct!');
}

var myColor = prompt('My favorite color is orange?');
// console.log('No, I din't like orange color.);

myColor = myColor.toLowerCase();
if (myColor === 'no' || myColor === 'n') {
    alert('Yeeeah, you are right!');
} else {
    alert('Nope, I don\'t like orange color! My favorite is white.');
}

var nativeLanguage = prompt('My native language is Russian?');
// console.log('No, Rusian is not my native language.');

nativeLanguage = nativeLanguage.toLowerCase();
if (nativeLanguage === 'no' || nativeLanguage === 'n') {
    alert('Yep, my native language is Ukranian');
} else {
    alert('Nope, I speak Russian but my native is Ukranian.');
}

var pets = prompt('Do I have any pets?');
// console.log('No, I don't have pets.');

pets = pets.toLowerCase();
if (pets === 'no' || pets === 'n') {
    alert('Correct, unfortunately I don\'t have any.');
} else {
    alert('I would love to have some, but no.');
}

var likeToBeHere = prompt('Am I happy to be here?');
// console.log('Yes, I happy to be here'.);

likeToBeHere = likeToBeHere.toLowerCase();
if (likeToBeHere === 'yes' || likeToBeHere === 'y') {
    alert('Yaaaay, I\'m really happy to be here with all of you!!!!');
} else {
    alert('No, No, No. It\'s impssible!');
}