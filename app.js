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
// console.log('myName: ', myName);

myName = myName.toLowerCase();
if (myName === 'yes') {
    alert('Yeeeah');
} else {
    alert('Ooooops, not correct!');
}

var myColor = prompt('My favorite color is orange?');
// console.log('myName: ', myName);

myColor = myColor.toLowerCase();
if (myColor === 'no') {
    alert('Yeeeah, you are right!');
} else {
    alert('Nope, I don\'t like orange color! My favorite is white.');
}