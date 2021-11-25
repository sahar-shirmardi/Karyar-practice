let radius = 10;
const pi = 3.14;

// + - * / ** %
console.log(10/2);

let remainder = radius % 3;
console.log(remainder);

let area = pi * (radius ** 2);
console.log(area);

// priorities
// 1.() 
//  2.** 
//  3./ 
//  4.* 
//  5.+ 
//  6.-

let result = 5 * (10 - 3)**2;
console.log(result);

let number = 0;
number = number + 1;
number++;
number = number - 1;
number--;
number = number + 10;
number += 10;
number -= 10;
number *= 10;
number /= 10;

// NaN: not a number
let res = number / "string";
console.log(res);
