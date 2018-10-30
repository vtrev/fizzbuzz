let fizzBuzz = require('./index');
let fbInstance = fizzBuzz();


let i = 1;
while (i < 120000) {
    console.log(fbInstance.fb(i));
    i++
}