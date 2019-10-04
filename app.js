'use strict';

var rightAnswerCount = 0;
var userNamePrompt;

function askName() {
  var answer = prompt('Hey! What\'s your name ?')
  userNamePrompt = answer;
  alert('Welcome ' + answer + '!');
}



function myName(myName){
  // console.log('myName: ', myName);
  myName = myName.toLowerCase();
  if (myName === 'yes' || myName === 'y') {
    alert('Yeeeah');
    rightAnswerCount++;
  } else {
    alert('Ooooops, not correct!');
  }
}


function myColor(myColor){
// console.log('myColor: ', myColor);

  myColor = myColor.toLowerCase();
  if (myColor === 'no' || myColor === 'n') {
    alert('Yeeeah, you are right!');
    rightAnswerCount++;
  } else {
    alert('Nope, I don\'t like orange color! My favorite is white.');
  }
}


function nativeLanguage(nativeLanguage){
// console.log('nativeLanguage: ' , nativeLanguage);

  nativeLanguage = nativeLanguage.toLowerCase();
  if (nativeLanguage === 'no' || nativeLanguage === 'n') {
    alert('Yep, my native language is Ukranian');
    rightAnswerCount++;
  } else {
    alert('Nope, I speak Russian but my native is Ukranian.');
  }
}


function pets(pets){
// console.log('pets: ' , pets);

  pets = pets.toLowerCase();
  if (pets === 'no' || pets === 'n') {
    alert('Correct, unfortunately I don\'t have any.');
    rightAnswerCount++;
  } else {
    alert('I would love to have some, but no.');
  }
}


function likeToBeHere(likeToBeHere){
// console.log('likeToBeHere: ', likeToBeHere);

  likeToBeHere = likeToBeHere.toLowerCase();
  if (likeToBeHere === 'yes' || likeToBeHere === 'y') {
    alert('Yaaaay, I\'m really happy to be here with all of you!!!!');
    rightAnswerCount++;
  } else {
    alert('No, No, No. It\'s impssible!');
  }
}



function myAge(myAge){
  for (var i = 0; i < 4; i++ ){
    myAge = parseInt(myAge);
    if (myAge === 25) {
      alert('You are right!');
      break;

    } else if (myAge < 25) {
      myAge = prompt('Too low. Try again');
    } else {
      myAge = prompt('Too high. Try again');
    }
  }
}


function usersGuess(usersGuess){
  var statesVisited = ['alaska', 'nevada', 'hawaii', 'florida'];
  // console.log('statesVisited:', statesVisited);

  for (var j = 0; j < 6; j++) {
    usersGuess = usersGuess.toLowerCase();
    var isCorrect = false;
    for (var a = 0; a < statesVisited.length; a++) {
      if (usersGuess === statesVisited[a]) {
        //   console.log(usersGuess === statesVisited[a]);
        rightAnswerCount++;
        isCorrect = true;
        alert('Correct, I visited this state! I visited Alaska, Nevada, Hawaii and Florida');
        break;
      }
    }
    if (isCorrect) {
      break;
    }
    alert('Not yet, but I\'ll go once for sure');
    usersGuess = prompt('Try again');
  }
}

askName();
myName(prompt('Let\'s check you! My name is Kate?'));
myColor(prompt('My favorite color is orange?'));
nativeLanguage(prompt('My native language is Russian?'));
pets(prompt('Do I have any pets?'));
likeToBeHere(prompt('Am I happy to be here?'));
myAge(prompt('Okay, now let\'s play new game, you should to guess a number.How old am I?'));
usersGuess(prompt('I loveeee traveling! What do you think, which states I already visited in US, Alaska, Nevada, Hawaii, Florida, Illinois, Texas?'));

alert('Hey, you got ' + rightAnswerCount + ' correct answers, congradulations!!!');

alert('Thank you ' + userNamePrompt + ' for taking small quiz about me, hope you had fun and you\'ll know me better!');
