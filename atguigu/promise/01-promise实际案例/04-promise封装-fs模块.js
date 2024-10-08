/* 
    封装一个函数 mineReadFile 读取文件内容
    参数：path 文件路径
    返回：promise 对象
*/

function mineReadFile(path){
    return new Promise((resolve,reject) => {
        const fs=require('fs');
        fs.readFile(path,(err,data) => {
            if(err)reject(err)
            resolve(data)
        })
    })
}

mineReadFile('./test.txt').then((value) => {
    console.log(value.toString());
},(reason) => {
    console.log(reason);
})