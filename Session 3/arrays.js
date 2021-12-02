//Declaration

let myArray = ['Kamyar'];
let names = ['Ali', 'Reza', 'Sara'];
let ages = [24, 56, 12, 46, 0];
let profile = ['Sahar', 'Shirmardi', 21];

console.log(profile[2]);
console.log(names);

//Properties and methods
console.log(names.length);
let idx = names.indexOf('Ali');
// Try to find the index of a nonexistant element
console.log(idx);

let joined = names.join(',');
console.log(joined);

let concated = names.concat(['Kamyar']);
console.log(concated)

//Destructive method
let result = names.push('Darya');
console.log(names);

//Destructive method
let popped = names.pop();
console.log(popped);
console.log(names);
