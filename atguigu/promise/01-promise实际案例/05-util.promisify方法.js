const util = require('util');
const fs = require('fs');
// 传入一个遵循常见的错误优先的回调风格的函数（即以(err,value)）,并返回一个 返回promise的版本。
const mineReadFile=util.promisify(fs.readFile);

mineReadFile('./test.txt').then((value) => {
    console.log(value.toString());
},(reason) => {
    console.log(reason);
})