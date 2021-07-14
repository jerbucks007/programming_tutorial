/**
 * @title: es6 Destructuring
 * @Author: Jerard Joseph Buencamino
 * @2015
 * @FilePath: src/resources/es6/resource.es6.destructuring.js
 * @Version: 1.0.0
 * @Changes: Thursday, 9 July 2021
 * @Desc: Destructuring: take an object or an array and convert it to smaller object or array
 */

import { CONSOLE, EFFECT } from "../../constants/constant.consoleColor";

const names = ['Jerard', 'Joseph', 'Kairos', 'Thorphidho', 'General'];
const ages = [29, 30, 21, 16, 45];

//1 normal approah
CONSOLE.FgYellow(`1: old approach for beginners`);
const element1 = names[0];
const element2 = names[1];

console.log(`const element1 = names[0]; , element1=${element1}`);
console.log(`const element2 = names[1]; , element2=${element2}`);

//2
CONSOLE.FgYellow(`2: native destructuring of array`); 
const [elem1, elem2] = names;

console.log(`const [elem1, elem2] = names; , elem1=${elem1}, elem2=${elem2}`);

//3 skiping second element
CONSOLE.FgYellow(`3: native destructuring of array with skipping element`); 
const [ele1,,ele3] = names;

console.log(`const [ele1,,ele3] = names; , ele1=${ele1}, ele3=${ele3}`);

//4 es6, using spread operator
CONSOLE.FgYellow(`4: using es6 "spread operator"`); 
const [el1,el2,...el3] = names;

console.log(`const [el1,el2,...el3] = names; , el1=${el1}, el2=${el2}, el3=${el3}`);
console.log(`el3 will be all the remaining element of the array after el2`);

//5 es6, combining 2 array using spread operator
CONSOLE.FgYellow(`5: combining 2 array using "spread operator"`); 
const combinedNamesAges = [...names,...ages];

console.log(`const combinedNamesAges = [...names,...ages]; , combinedNamesAges=${combinedNamesAges}`);

//6 de structure with function
CONSOLE.FgYellow(`6: Destructuring with function`); 
const calculator = (a, b) => {
    return [a+b, a*b]
}

const [sum, multiply] = calculator(1, 2);
console.log(`sum is the first element to return and multiply is the second`);
console.log(`const [sum, multiply] = calculator(1, 2); , sum=${sum}, multiply=${multiply}`);
console.log(EFFECT.Reset);

const [sum1, multiply1, division1 = "doesn't have division yet"] = calculator(1, 2);
console.log(`division1 doesn't exist in the function so it will return the default value of division1`);
console.log(`const [sum1, multiply1, division1 = "doesn't have division yet"] = calculator(1, 2); , sum1=${sum1}, multiply1=${multiply1}, division1=${division1}`);

//7 de structuring with object
CONSOLE.FgYellow(`7: Destructuring with Object`); 
const employee1 = {
    name: 'Jerard',
    age: 29,
    position: 'Team Lead',
    address: {
        city: 'Mandaluyong',
        state: 'united' // lol
    }
}

const employee2 = {
    name: 'Krizia',
    age: 21,
    address: {
        city: 'Somewhere down the road',
        state: 'of province' // lol
    }
}

const {name, age} = employee1;
console.log(`const {name, age} = employee1; , name=${name}, age=${age}`);
console.log(EFFECT.Reset);

const {name:firstname, age:edad} = employee2;
console.log(`const {name:firstname, age:edad} = employee2; , firstname=${firstname}, edad=${edad}`);
console.log(EFFECT.Reset);

const {name:firstname1, position:position1} = employee1;
console.log(`const {name:firstname1, position:position1} = employee1; , firstname1=${firstname1}, position1=${position1}`);
console.log(EFFECT.Reset);

const {name:firstname2, position:position2 = 'Super Junior Dev'} = employee2;
console.log(`const {name:firstname2, position:position2 = 'Super Junior Dev'} = employee2; , firstname2=${firstname2}, position2=${position2}`);
console.log(EFFECT.Reset);

const {name:firstname3, address: {city}} = employee1;
console.log(`const {name:firstname3, address: {city}} = employee1; , firstname3=${firstname3}, city=${city}`);
console.log(EFFECT.Reset);

const employee3 = { employee1, employee2};
console.log(`const employee3 = { employee1, employee2}; , employee3=${JSON.stringify(employee3)}`);
console.log(EFFECT.Reset);

const employee4 = { ...employee1, ...employee2};
console.log(`const employee4 = { ...employee1, ...employee2}; , employee4=${JSON.stringify(employee4)}`);
console.log(EFFECT.Reset);

//8 function
CONSOLE.FgYellow(`7: Destructuring of Functions argument`); 

const destructuringFunc = ({ name, age, address, position = 'Super Junior Dev' }) => {
    console.log(
        {
            pangalan: name,
            edad: age,
            tirahan: address,
            puwesto: position 
        }
    );
}

console.log(`employee1`);
destructuringFunc(employee1);
console.log(`employee2`);
destructuringFunc(employee2);

// function destructuringFunc2() {

//     console.log(arguments)
// }

// destructuringFunc2(employee1, employee2);




