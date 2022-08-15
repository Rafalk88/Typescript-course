console.log('Działający TS!');
// Primitive values ---------------------------------------------------------------------------------------------------------------------------------
// Error: 'age' implicitly has a type of 'any', but a better type can be inferred from its usage .ts(7043)
// type 'any'
// let age
/*
If not defined type, TS will define it as first type that is added to variable
in this case type of age is 'number' and if another type will be added, there will
be and Error
It's called type inference
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
// const add = (a: number, b: number) => a + b
//console.log(add(1,2))
// Error: Argument of type 'string' is not assignable to parameter of type 'number' .ts(2322)
// but converstion still work and JS will concatenate two variables
// console.log(add('1',2)) // JS = '12'
// Error: Expected 2 arguments, but got 1 .ts(2554)
// console.log(add(10))
// End of types in functions -------------------------------------------------------------------------------------------------------------------------
// Example ------------------------------------------------------------------------------------------------------------------------------------------
/*
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
*/
// End of example -----------------------------------------------------------------------------------------------------------------------------------
// Union types ---------------------------------------------------------------------------------------------------------------------------------------
// If we want we can declare more than one type in variable using '|' not '/'
/*
const logAge = (age: number | string) => {
    console.log(`Hej mam ${age} lat!`)
}

logAge(34)
logAge('trzydzieści cztery')
*/
// End of union types --------------------------------------------------------------------------------------------------------------------------------
// Boolean example -----------------------------------------------------------------------------------------------------------------------------------
/*
const btnEl = document.querySelector('.btn')
const calcPrice = (originalPrice: number, hasDiscount: boolean) => {
    return hasDiscount ? originalPrice * 0.8 : originalPrice
}

btnEl.addEventListener(
    'click',
    () => {

        const originalPrice: number = 100
        // method URLSearchParams return 'string' type, then if we declare hasDiscount as boolean it will throw Error
        const hasDiscount: boolean = new URLSearchParams(window.location.search).get('discount') === 'true'
        console.log(calcPrice(originalPrice, hasDiscount))

    }
)
*/
// End of boolean example ----------------------------------------------------------------------------------------------------------------------------
// Array type example --------------------------------------------------------------------------------------------------------------------------------
const tasksContainerEl = document.querySelector('.tasks');
const taskNameInput = document.querySelector('.name');
const btnEl = document.querySelector('button');
// string[] - this is table of strings
const tasks = ['Wyrzuć śmieci', 'Pójść na siłkę', 'Nakarmić psa'];
// Error Argument of type 'number' is not assignable to parameter of type 'string' .ts(2345)
// tasks.push(10)
const render = () => {
    tasksContainerEl.innerHTML = '';
    tasks.forEach(task => {
        const taskEl = document.createElement('li');
        taskEl.innerText = task;
        tasksContainerEl.appendChild(taskEl);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
btnEl.addEventListener('click', (e) => {
    e.preventDefault();
    addTask(taskNameInput.value);
    render();
});
render();
// End of array type example -------------------------------------------------------------------------------------------------------------------------
