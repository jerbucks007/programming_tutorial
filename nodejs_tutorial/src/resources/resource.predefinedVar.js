/**
 * @title: Sample Predefined with export module
 * @Author: Jerard Joseph Buencamino
 * @2015
 * @FilePath: src/resources/resource.class.js
 * @Version: 1.0.0
 * @Changes: Thursday, 8 July 2021
 * @Desc: 
 */

import path from 'path';

/*
* @Function: _filename
* @Description: this method can be use instantly when imported to another class without any instantiation,
    this coding style uses ES6
*/
exports._filename = () => {
    console.log(`__filename: ${__filename}`); // D:\apps\sample_app\src\resources\resource.predefinedVar.js
    console.log(`path.basename(__filename): ${path.basename(__filename)}`); // index.js
    console.log(`path.dirname(__filename): ${path.dirname(__filename)}`); // D:\apps\sample_app\src\resources
    console.log(`path.extname(__filename): ${path.extname(__filename)}`); //.js
};

/*
* @Function: _dirname
* @Description: this method can be use instantly when imported to another class without any instantiation,
    this coding style uses ES6
*/
exports._dirname = () => {
    console.log(`__dirname: ${__dirname}`); // // D:\apps\sample_app\src\resources
}
