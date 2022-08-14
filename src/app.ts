console.log('Działający TS!')

// Primitive values

// Error: 'age' implicitly has a type of 'any', but a better type can be inferred from its usage .ts(7043)
// type 'any'
// let age

/*
if not defined type, TS will define it as first type that is added to variable
in this case type of age is 'number' and if another type will be added, there will
be and Error
*/
//let age = 33

let age: number = 33

age = 34
age = 34.5 // no Error

// Error: Type 'string' is not assignable to type 'number' .ts(2322)
// age = 'trzydzieści trzy'

console.log(age)

let ageAsString: string = 'trzydzieści trzy' // '' lub "" bez znaczenia, którego znacznika użyjemy

ageAsString = `${age}` // ES6 no Error