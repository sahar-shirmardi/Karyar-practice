console.log(true, false);
console.log('true', 'false');
console.log(typeof 'true', typeof true);

let email = 'what@whatever.com'
let result = email.includes('@');
console.log(result);


let animals = ['cat', 'dog', 'fish'];
result = animals.includes('dog');
console.log(result);

// Loose comparison
let age = 25;
console.log(age > 34);
console.log(age == 34);
console.log(age != 34);
console.log(age < 34);
console.log(age >= 25);
console.log(age <= 34);

let person = 'sahar';
console.log(person == 'sahar');
console.log(person == 'Sahar');
console.log(person > 'crystal');
console.log(person > 'Sahar');

console.log(age == '25');

//Strict comparsion
console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');