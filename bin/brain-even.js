#!/usr/bin/env node
import getUserName from "../src/cli.js";
import {getRandomInt, isEven} from "../src/custom-math.js";
import readlineSync from "readline-sync";
console.log('Welcome to the Brain Games!');
const userName = getUserName();
const answerYes = 'yes';
const answerNo = 'no';
console.log(`Answer "${answerYes}" if the number is even, otherwise answer "${answerNo}"`);

let i = 0;
for (; i<3; i++) {
    const randomNumber = getRandomInt(20);
    console.log(`Question: ${randomNumber}`);

    const answerFromUser = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(randomNumber) ? answerYes : answerNo;
    if (answerFromUser === correctAnswer) {
        console.log('Correct!')
    } else {
        console.log(`'${answerFromUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
        break;
    }
}
if (i === 3){
    console.log(`Congratulations, ${userName}!`);
}

