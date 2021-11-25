// let name = 'sahar123%&*_-';
// strings can contain letters, numbers and characters
// console.log(name);

// concatantion 
let firstName = 'Ali';
let lastName = 'Alaee';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

//get character
console.log(firstName[0]); 
console.log(lastName[3]);

//get length
console.log(fullName.length);

// string methods

// variable.property
// variable.method()

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName); 

console.log(lastName.indexOf('e'));
console.log(lastName.lastIndexOf('e'));

console.log(firstName.replace('A', 'R'));
console.log(lastName.replace('e', 'R'));
console.log(fullName.slice(2,5)); // starts from 2 ends in 4
console.log(fullName.substr(2,5)); // the second argument is the length of substring

// variable.indexOf(a char that doesnt exist in variable)