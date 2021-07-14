/**
 * @title: Sample Module
 * @Author: Jerard Joseph Buencamino
 * @2015
 * @FilePath: src/resources/resource.module.js
 * @Version: 1.0.0
 * @Changes: Thursday, 8 July 2021
 * @Desc: 
 */

const Person = {
    name: 'Jerard',
    walk() {
        // this is an ES6 function inside object
    }
}

/* 
 * passing constant variable in module export 
 */
module.exports = Person;