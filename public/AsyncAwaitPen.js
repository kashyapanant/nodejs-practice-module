const { Color } = require("chalk");

let prom = new Promise((resolve, reject) =>{
    let time = 5000;
    setTimeout(() => resolve(`Wait finished after ${time}ms`), time);
}); 

async function colorPicker(clr){
let res = await prom;
console.log(`res --> ${res} and color --> ${clr}`);
return `color chosen is ${clr} and ${res}`;
}

colorPicker('dark').then(result => console.log(result));

console.log('color chosen');

