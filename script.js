console.log("please print");
let name = prompt("What is your name?");
let game = prompt(`Hi ${name}, would you like to play 3 or 6 holes of mini golf?`);

console.log(name);
console.log(game);

var score = 0;

if (game === "3" ) { 
    let puttOne = parseInt(prompt("How many putts for hole one? (par 3)", "0"));
    let puttTwo = parseInt(prompt("How many putts for hole two? (par 3)", "0"));
    let puttThree = parseInt(prompt("How many putts for hole three? (par 3)", "0"));
    let score = puttOne + puttTwo + puttThree;

    if (score > 9) {
        console.log(`Nice try, ${name}... Your total par was: +${score - 9}.`);
    } if (score < 9) {
        console.log(`Great job, ${name}! Your total par was: -${9 - score}.`);
    } if (score === 9) {
        console.log(`Good game, ${name}. Your total par was: 0.`);
    }
} if (game === "6") {
    let puttOne = parseInt(prompt("How many putts for hole one? (par 3)", "0"));
    let puttTwo = parseInt(prompt("How many putts for hole two? (par 3)", "0"));
    let puttThree = parseInt(prompt("How many putts for hole three? (par 3)", "0"));
    let puttFour = parseInt(prompt("How many putts for hole four? (par 3)", "0"));
    let puttFive = parseInt(prompt("How many putts for hole five? (par 3)", "0"));
    let puttSix = parseInt(prompt("How many putts for hole six? (par 3)", "0"));
    let score = puttOne + puttTwo + puttThree + puttFour + puttFive + puttSix;

    if (score > 18) {
        console.log(`Nice try, ${name}... Your total par was: +${score - 18}.`);
    } if (score < 18) {
        console.log(`Great job, ${name}! Your total par was: -${18 - score}.`);
    } if (score === 18) {
        console.log(`Good game, ${name}. Your total par was: 0.`);
    }

} else {
    console.log("You may only choose 3 or 6. Try again.");
};