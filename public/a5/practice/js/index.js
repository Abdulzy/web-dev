//alert('Hello World!');
console.log('Hello World!');


console.log('Variables and constants');
global1 = 10;
console.log(global1);
var functionScoped = 2;
console.log(functionScoped);
let blockScoped = 5;
console.log(blockScoped);
const constant1 = global1 + functionScoped - blockScoped;
console.log(constant1);


console.log('Variable types');
let numberVariable = 123;
console.log(numberVariable);
let floatingPointNumber = 234.345;
console.log(floatingPointNumber);
let stringVariable = 'Hello World!';
console.log(stringVariable);
let booleanVariable = true;
console.log(booleanVariable);
let isNumber = typeof numberVariable;
console.log(isNumber);
let isString = typeof stringVariable;
console.log(isString);
let isBoolean = typeof booleanVariable;
console.log(isBoolean);


console.log('Boolean');
let true1 = true;
console.log(true1);
let false1 = false;
console.log(false1);
let false2 = true1 && false1;
console.log(false2);
let true2 = true1 || false1;
console.log(true2);
let true3 = !false2;
console.log(true3);
let true4 = numberVariable === 123;
console.log(true4);
let true5 = floatingPointNumber !== 321.432;
console.log(true5);
let false3 = numberVariable < 100;
console.log(false3);


console.log('If else');
if(true1) {
    console.log(true);
}

if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}


const loggedIn = false;
console.log('Ternary');
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting)


function add (a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);


const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);


const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);


const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);


let numberArray1 = [1, 2, 3, 4, 5];
console.log(numberArray1);
let stringArray1 = ['string1', 'string2'];
console.log(stringArray1);
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];
console.log(variableArray1);
console.log(variableArray1[0]);
console.log(variableArray1[1]);
console.log(variableArray1[2]);
console.log(variableArray1[3]);
console.log(variableArray1[4]);


console.log("Array index and length");
const length1 = numberArray1.length;
console.log(length1);
const index1 = numberArray1.indexOf(3);
console.log(index1);


// adding new items
numberArray1.push(6);
stringArray1.push('string3');

// remove 1 item starting on 3rd spot 
console.log(index1);
numberArray1.splice(2, 1);
console.log(numberArray1);
stringArray1.splice(1, 1);
console.log(stringArray1);


console.log("For loops");
for (let i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}


console.log("Find");
const four = numberArray1.find(a => a === 4);
console.log(four);
const string3 = stringArray1.find(a => a === 'string3');
console.log(string3);


console.log("Find Index");
const fourIndex = numberArray1.findIndex(a => a === 4);
console.log(fourIndex);
const string3Index = stringArray1.findIndex(a => a === 'string3');
console.log(string3Index);


console.log("Filter");
const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
const evenNumbers = numberArray1.filter(a => a % 2 === 0);
const oddNumbers = numberArray1.filter(a => a % 2 !== 0);
console.log(numberArray1);
console.log(numbersGreaterThan2);
console.log(evenNumbers);
console.log(oddNumbers);


const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
console.log(greeting2);


let xg = [110,70,10,60];
let mn = [71,43,14,95,98];
let xh = [...xg, 9, 10, 11, mn]
console.log(xh.length);


let sc = {
    xi: 'fv',
    gu: 'xe'
}
let jm = {
    gu: 'cr',
    yd: 'um',
    ...sc,
}
sc = {
    ...jm,
    gu: 'xg',
    yd: 'kd'
}
console.log(sc.xi)
console.log(jm.gu)
console.log(sc.yd)





