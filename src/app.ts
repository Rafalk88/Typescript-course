console.log('Działający TS!')

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

//let age: number = 33

//age = 34
//age = 34.5 // no Error

// Error: Type 'string' is not assignable to type 'number' .ts(2322)
// age = 'trzydzieści trzy'

//console.log(age)

//let ageAsString: string = 'trzydzieści trzy' // '' lub "" bez znaczenia, którego znacznika użyjemy

//ageAsString = `${age}` // ES6 no Error

// End of primitive values ---------------------------------------------------------------------------------------------------------------------------

// Types in functions --------------------------------------------------------------------------------------------------------------------------------

const add = (a: number, b: number) => a + b

//console.log(add(1,2))

// Error: Argument of type 'string' is not assignable to parameter of type 'number' .ts(2322)
// but converstion still work and JS will concatenate two variables
// console.log(add('1',2)) // JS = '12'

// Error: Expected 2 arguments, but got 1 .ts(2554)
// console.log(add(10))

// End of types in functions -------------------------------------------------------------------------------------------------------------------------

// Examples ------------------------------------------------------------------------------------------------------------------------------------------

const input1El: HTMLInputElement = document.querySelector('.input1')
const input2El: HTMLInputElement = document.querySelector('.input2')
const btnEl = document.querySelector('.btn')

btnEl.addEventListener(
    'click',
    () => {

        // without typing inputs the value will throw Error: property 'value' does not exist on type 'Element' .ts(2339)
        // querySelector return 'Element' type
        // after typing HTMLInputElement to consts thete will be Error because value return 'string' type and function is declared 'number' type
        const sum = add(Number(input1El.value), Number(input2El.value))
        console.log(sum)

    }
)

// End of examples -----------------------------------------------------------------------------------------------------------------------------------