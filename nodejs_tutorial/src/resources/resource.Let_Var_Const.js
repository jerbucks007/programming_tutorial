/**
 * @title: Let & Var & Const Example
 * @Author: Jerard Joseph Buencamino
 * @2015
 * @FilePath: src/resources/resource.function.js
 * @Version: 1.0.0
 * @Changes: Thursday, 9 July 2021
 * @Desc: shows difference between arrow functions (es6) and standard functions
 */

 import { CONSOLE, EFFECT } from '../constants/constant.consoleColor';

//
CONSOLE.FgRed(`Var Scope: `);
if(true){
    var varSample = 'I am a variable';
}

try{
    console.log(`varSample: "${varSample}" can be called even outside the scope because it is declared as Var`);
}catch(err){
    console.log(`Error: ${err}`);
}

//
CONSOLE.FgRed(`Let Scope: `);
if(true){
    let letSample = 'I am a let';
}

try{
    console.log(letSample);
}catch(err){
    console.log(`letSample: "${varSample}" cannot be called outside its scope because it is declared as let`);
    console.log(`Error: ${err}`);
}

//
CONSOLE.FgRed(`Var Re-declaration: `);
try{
    var varSample2 = 'I am a variable';
    var varSample2 = 'I am a variable';
    console.log(`varSample2: "${varSample2}" can be re declared in the same scope because it is Var`);
}catch(err){
    console.log(`Error: ${err}`);
}

//
CONSOLE.FgRed(`Const Re-declaration: `);
try{
    const constSample2 = 'I am a constant';
    //const constSample2 = 'I am a constant';
    console.log(`constSample2: "${constSample2}" cannot be re-declare at the same scope because it is Const`);
}catch(err){
    console.log(`Error: ${err}`);
}

//
CONSOLE.FgRed(`Let Re-declaration: `);
try{
    let letSample2 = 'I am a variable';
    //let letSample2 = 'I am a variable';
    console.log(`letSample2: "${letSample2}" cannot be re-declare at the same scope because it is let`);
}catch(err){
    console.log(`Error: ${err}`);
}

//
CONSOLE.FgRed(`Const Re-assigning: `);
try{
    const constSample3 = 'I am a constant variable';
    console.log(`constSample3: "${constSample3}" const cannot be re-assign`);
    constSample3 = 'I am not a constant variable';
}catch(err){
    console.log(`Error: ${err}`);
}

//
CONSOLE.FgRed(`Const Re-assigning: Object`);
try{
    const constSample4 = {type: 'I am a constant variable'};
    console.log(`constSample4: "${JSON.stringify(constSample4)}"`);
    constSample4.type = 'I change my type value, am I still a constant?';
    console.log(`constSample4: "${JSON.stringify(constSample4)}", changing constant property value tru "dot notation" are allowed`);
}catch(err){
    console.log(`Error: ${err}`);
}

