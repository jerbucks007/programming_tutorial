/**
 * @title: Sample Promises with Async
 * @Author: Jerard Joseph Buencamino
 * @2015
 * @FilePath: src/resources/resource.promise.js
 * @Version: 1.0.0
 * @Changes: Thursday, 9 July 2021
 * @Desc: 
 */

//
let promisesList = {
    promise1: new Promise ((resolve, reject)=>{
        setTimeout(() => resolve('Promise 1 will print after 1000 milliseconds'), 1000);
    }),
    promise2(isTrue) {
        return new Promise ((resolve, reject)=>{
            if(isTrue)
                resolve(`Resolve: Promise 2 is ${isTrue}`)
            else
                reject(`Reject: Promise 2 is ${isTrue}`)
        })
    },
    promise3 : new Promise ((resolve, reject)=>{
        setTimeout(() => resolve('Promise 3 is 3000 milliseconds late'), 3000);
    }),
}

// promise1
/*
* @Function: asyncPromise
* @Description: standard promise format
* @Return: {string}  
*/
exports.standardPromise = () => {
    return promisesList.promise1;
}
/*
* @Function: callAsyncPromise
* @Description: print the return of standardPromise, notice we add await because promises are async
*       and console.log is not but in order to work you need to add async before () parenthesis of a function
*/
exports.callAsyncPromise = async () => {
    console.log(await exports.standardPromise());
}

// promise2
/*
* @Function: resolveAndReject
* @Description: promises that return resolve and reject
*       if the response of the promise is resolve it goes to then()
*       if the response of the promise is reject it goes to catch()
*/
exports.resolveAndReject = (isTrue) => {
    promisesList.promise2(isTrue).then((resolve)=>{
        console.log(resolve);
    }).catch((reject) => {
        console.log(reject);
    });
}

// promiseall
/*
* @Function: promiseAll
* @Description: Promise.all waits until all promises are finish, if all are success it return all resolved from all promises
*       but if at least one failed it returns only the promise that failed
*/
exports.promiseAll = () => {
    Promise.all([
        exports.standardPromise(), 
        // setting the params into false will result to receive only the response of promise2
        promisesList.promise2(true), 
        promisesList.promise3
    ]).then((resolve) => {
        console.log(resolve);
    }).catch((reject) => {
        console.log(reject);
    })
}