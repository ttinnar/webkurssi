'use strict'

const doSomething = (input) => 'do sum' + input;


//[1,2,3].map((num) => {
//  return num * 2;
//});

const doubles = [1,2,3].map((num) => num * 2);
console.log(doubles)

// doSomething = input => 'i did sum: ' + input;

export {doSomething, doubles};
