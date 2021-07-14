/**
 * @title: Object Oriented Prorgamming/ Classes Tutorial
 * @Author: Jerard Joseph Buencamino
 * @2015
 * @FilePath: src/resources/resource.class.js
 * @Version: 1.0.0
 * @Changes: Thursday, 8 July 2021
 * @Desc: 
 *      - CLASSES/Object is often use in Object Oriented Programming, using this, programmer can easily modify its code
 *          in Classes Variable are called Properties
 *          in Classes Functions are called Method
 *      - OOP: oop is a programming paradigm
 *          4 pillars/concept of OOP
 *              - Encapsulation: group related functions and variables
 *              - Abstraction: hide the details and complexity by adding access modifiers (public, private, protected) 
 *              - Inheritance: eliminate redundant code by re-using classes to other class if the content is the same
 *              - Polymorphism: refactor ungly switch/case statement
 */

class Person {

    /*
     * @Function: constructor
     * @Description: this is called first when this class are initialize/instantiate
     *          ex. const Person = new Person(name, address, age)
     * @Param: {string} name 
     * @Param: {string} address
     * @Param: {number} age
     */
    constructor(name, address, age){
        this._name = name;
        this._address = address;
        this._age = age;
    }

    /*
     * @Function: greetings
     * @Description: this contains ES6 string also known as "template literal/template strings"
     * @Return: {string}  
     */
    greetings () {
        return `hello ${this._name}`; 
    }
}

exports.Person = Person;

// Factory Function
exports.FactoryFunction = (message) => {
    return {
        message,
        showMessage(){
            console.log(this.message)
        }
    }
};

// HOW TO CALL
// const factory = FactoryFunction('THIS IS A MESSAGE');
// factory.showMessage();

// Constructor Function
function ConstructorFunction(message) {
    this.message = message;
    this.showMessage = function () {
        console.log(this.message)
    }
};

// HOW TO CALL
// const conFunc = new ConstructorFunction(`This is the message from constructor function`);
// conFunc.showMessage();

exports.ConstructorFunction = ConstructorFunction;

