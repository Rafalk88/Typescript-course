console.log('Działający TS!');
// Primitive values ---------------------------------------------------------------------------------------------------------------------------------
// Error: 'age' implicitly has a type of 'any', but a better type can be inferred from its usage .ts(7043)
// type 'any'
// let age
/*
If not defined type, TS will define it as first type that is added to variable
in this case type of age is 'number' and if another type will be added, there will
be and Error
*/
//let age = 33
let age = 33;
age = 34;
age = 34.5; // no Error
// Error: Type 'string' is not assignable to type 'number' .ts(2322)
// age = 'trzydzieści trzy'
console.log(age);
let ageAsString = 'trzydzieści trzy'; // '' lub "" bez znaczenia, którego znacznika użyjemy
ageAsString = `${age}`; // ES6 no Error
// End of primitive values ---------------------------------------------------------------------------------------------------------------------------
// Types in functions --------------------------------------------------------------------------------------------------------------------------------
const add = (a, b) => a + b;
console.log(add(1, 2));
// Error: Argument of type 'string' is not assignable to parameter of type 'number' .ts(2322)
// but converstion still work and JS will concatenate two variables
// console.log(add('1',2)) // JS = '12'
// Error: Expected 2 arguments, but got 1 .ts(2554)
// console.log(add(10))
// End of types in functions -------------------------------------------------------------------------------------------------------------------------
// Examples ------------------------------------------------------------------------------------------------------------------------------------------
// End of examples -----------------------------------------------------------------------------------------------------------------------------------
