// 1.For loops
// for (counter; condition; final expression){}
let names = ['sahar', 'ali', 'sara'];
let length = names.length;
for (let i=0; i<length; i++){
    console.log(names[i]);
    // i = 2
    // i++
    // i = 3
    let html = `<h1> ${names[i]} </h1>`;
    console.log(html);
}

let i = 0;
while(i<length){
    console.log(names[i]);
    i++;
}

i = 5;
while(i<5){
    console.log(names[i]);
    i++;
}

i = 5;
do {
    console.log('do while');
    i++;
} while(i<5);
