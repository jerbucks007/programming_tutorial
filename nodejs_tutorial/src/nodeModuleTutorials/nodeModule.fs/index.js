// npm i fs -g --save

// file system

import { CONSOLE_COLOR, CONSOLE_EFFECT } from '../../constants/constant.consoleColor';
import fsModule from './nodeModule.fs';

exports.start = () => {

    let fn = {};

    fn.makeDir = () => {
        fsModule.fsMkdir();
    }

    fn.writeFile = () => {
        fsModule.fsWriteFile('This is a sample file created by fs module');
    }

    fn.appendFile = () => {
        fsModule.fsAppendFile('\nappend a file 1');
        fsModule.fsAppendFile('\nappend a file 2');
    }

    fn.readFileSync = () => {
        const data = fsModule.fsReadFileSync();
        console.log(data);
    }

    fn.makeDir();
    fn.writeFile();
    fn.appendFile();
    fn.readFileSync();
    
    return fn;

} 

