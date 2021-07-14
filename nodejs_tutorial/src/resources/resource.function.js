/**
 * @title: Sample Functions
 * @Author: Jerard Joseph Buencamino
 * @2015
 * @FilePath: src/resources/resource.function.js
 * @Version: 1.0.0
 * @Changes: Thursday, 9 July 2021
 * @Desc: shows difference between arrow functions (es6) and standard functions
 */

import { CONSOLE, EFFECT } from '../constants/constant.consoleColor';

const typeOfFunctions = {
    name: "Jerard",
    status: "Forever Single", 
    arrowFunction() {
        setTimeout(() => {
            CONSOLE.FgRed(`'this' value returns constant typeOfFunctions`);
            console.log(this);
        }, 100);
        
    },
    standardFunctions() {
        setTimeout(function(){
            CONSOLE.FgRed(`'this' value returns setTimeout`);
            console.log(this);
        }, 100);
    }
}

/*
* @Function: getArrowFunction
* @Description: in es6 arrow functions, the scope of 'this' is not redefined whether the functions are called anywhere, 
*       it scope will stay the same, in this case constant typeOfFunctions
*/
exports.getArrowFunction = () => {
    typeOfFunctions.arrowFunction();
}

/*
* @Function: getStandardFunctions
* @Description: in standard functions, the scope of 'this' are defined depending where the functions are called in this case
*       its called inside the setTimeout so it returns setTimeout
*/
exports.getStandardFunctions = () => {
    typeOfFunctions.standardFunctions();
}