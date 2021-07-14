/**
 * @title: Sample Class with Extends
 * @Author: Jerard Joseph Buencamino
 * @2015
 * @FilePath: src/resources/resource.extendClass.js
 * @Version: 1.0.0
 * @Changes: Thursday, 8 July 2021
 * @Desc: 
 */

const Person = require("./resource.class");

class Job extends Person {
    
    /*
     * @Function: constructor
     * @Description: this is called first when this class are initialize/instantiate
     *          ex. const Job = new Job(job, name, address, age);
     * @Param: {string} job
     * @Param: {string} name 
     * @Param: {string} address
     * @Param: {number} age
     */
    constructor(job, name, address, age){
        // super is required when you extend to another class to pass the param requirements of that class
        // for example Person class required name, address and age so pass it through super while job is put only on this class
        super(name, address, age);
        this._job = job;
    }

    /*
     * @Function: welcome
     * @Description: this contains ES6 string also known as "template literal/template strings"
     * @Return: {string}  
     */
    congrats() {
        // take note that any variable or functions inside the extend class can be use on this class
        // it can be seen on this._name  
        return `Congratulation ${this._name} on your salary increase in your job: ${this._job}`; 
    }
}

module.exports = Job;