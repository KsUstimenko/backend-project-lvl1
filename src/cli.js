import readlineSync from 'readline-sync';

function getUserName() {
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    return name;
}


export default getUserName;