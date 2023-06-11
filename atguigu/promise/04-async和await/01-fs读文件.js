const fs = require('fs');
const util = require('util');
const mineReadFile=util.promisify(fs.readFile);

function mineReadFile1(path){
    return new Promise((resolve,reject) => {
        const fs1 = require('fs');
        fs1.readFile(path,(err,data) => {
            if(err)reject(err)
            resolve(data)
        })
    })
}

// 读取三个文件
// await返回值和promise对象then方法的返回值一样
async function main(){
    try {
        let data1 = await mineReadFile('./test.txt')
        let data2 = await mineReadFile('./test1.txt')
        let data3 = await mineReadFile('./test2.txt')
        console.log(data1+data2+data3);
    } catch (error) {
        console.log(error);
    }
}

main()