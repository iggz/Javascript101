// Hello, you!

// Write a function hello which given a name, says hello to the name. Use the following template:

// function hello(name) {
//   // put your code here
// }
// hello('Mustache');

// Make the above program print

// Hello, Mustache!

function hello(name) {
    console.log(`Hello ${name}!`); 
}

hello('Mustache');

///////////////////////////////////////////////////////////////////////////

// Hello, you! Part 2

// Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise it behaves the same as previously.

function hello(name) {
    if (name == null){
        console.log('Hello World!');
    } else {
        console.log(`Hello, ${name}!`);
    }
}

hello();

///////////////////////////////////////////////////////////////////////////

// Madlib

// Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

// Example:

// > madlib('Anushka', 'art');
// 'Anushka's favorite subject in school is art.'


function madlib(name, subject) {
    return (`${name}'s favorite subject in school is ${subject}.`);
}

console.log(madlib("igor", "art"))


///////////////////////////////////////////////////////////////////////////

// Tip Calculator

// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

//     good -> 20%
//     fair -> 15%
//     bad -> 10%

// > tipAmount(100, 'good')
// 20
// > tipAmount(40, 'fair')
// 6


function tipAmount(amount, service) {
    if (service === "good") {
        return (amount * .20);
    } else if (service === "fair") {
        return (amount * 0.15);
    } else if (service === "bad") {
        return (amount * 0.10);
    } else {
        console.log("Please enter good, fair, or bad!")
    }
}

console.log(tipAmount(100, good));
console.log(tipAmount(40, "bad"));

///////////////////////////////////////////////////////////////////////////

// Tip Calculator 2

// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

// > totalAmount(100, 'good')
// 120
// > totalAmount(40, 'fair')
// 46


function totalAmount(amount, service) {
    if (service === "good") {
        return (amount * 1.20);
    } else if (service === "fair") {
        return (amount * 1.15);
    } else if (service === "bad") {
        return (amount * 1.10);
    } else {
        console.log("Please enter good, fair, or bad!")
    }
}

console.log(totalAmount(100, "good"));
console.log(totalAmount(40, "fair"));

///////////////////////////////////////////////////////////////////////////

// Tip Calculator 3

// Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.

// > splitAmount(100, 'good', 5)
// 24
// > splitAmount(40, 'fair', 2)
// 23


function splitAmount(amount, service, split) {
    if (service === "good") {
        return (amount * 1.20 / split);
    } else if (service === "fair") {
        return (amount * 1.15 / split);
    } else if (service === "bad") {
        return (amount * 1.10 / split);
    } else {
        console.log("Please enter good, fair, or bad!")
    }
}

console.log(splitAmount(100, "good", 5));
console.log(splitAmount(40, "fair", 2));


