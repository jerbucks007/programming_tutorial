import fs from "fs";
import path from "path";

const FS = {
    dir : "fs_mkdir",
    file: "fs_makeFile.txt"
};

exports.fsMkdir = () => {
    if( ! fs.existsSync(path.join(__dirname, `/${FS.dir}`))){
        fs.mkdir(path.join(__dirname, `/${FS.dir}`), {}, err => {
            if(err) throw err;
        });
    }   
}

exports.fsWriteFile = (text) => {
    if( ! fs.existsSync(path.join(__dirname, `/${FS.dir}`, `/${FS.file}`))){
        fs.writeFile(
            path.join(__dirname, `/${FS.dir}`, `/${FS.file}`), 
            text, 
            err => {
                if(err) throw err;
        });
    }
}

exports.fsAppendFile = (text) => {
    if(fs.existsSync(path.join(__dirname, `/${FS.dir}`, `/${FS.file}`))){
        fs.appendFile(
            path.join(__dirname, `/${FS.dir}`, `/${FS.file}`), 
            text, 
            err => {
                if(err) throw err;
        });
    }
}

exports.fsReadFileSync = () => {
    if(fs.existsSync(path.join(__dirname, `/${FS.dir}`, `/${FS.file}`))){
        return fs.readFileSync(
            path.join(__dirname, `/${FS.dir}`, `/${FS.file}`), 
            'utf8', 
        );
    }
    return null;
}

//coming soon
//fs.rename

