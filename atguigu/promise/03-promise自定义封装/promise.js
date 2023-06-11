
function Promise(executor){
    this.PromiseState='pending'
    this.PromiseResult=undefined
    this.callbacks=[];
    const self=this;
    function resolve(data){
        if(self.PromiseState!=='pending')return;
        self.PromiseState='fulfilled'
        self.PromiseResult=data
        self.callbacks.forEach(element => {
            element.onResolved()
        });
    }
    function reject(reason){
        if(self.PromiseState!=='pending')return;
        self.PromiseState='rejected'
        self.PromiseResult=reason
        self.callbacks.forEach(element => {
            element.onRejected()
        });
    }
    // 同步执行函数体内容
    try {
        executor(resolve,reject)
    } catch (error) {
        reject(error);
    }
}

Promise.prototype.then=function(onResolved,onRejected){
    const self=this;
    if(typeof onResolved!=='function'){
        onResolved=value=>value;
    }
    if(typeof onRejected!=='function'){
        onRejected=(reason) => {
            throw reason;
        }
    }
    return new Promise((resolve,reject) => {
        function callback(cb){
            setTimeout(() => {
                try{
                    let res=cb(self.PromiseResult);
                    if(res instanceof Promise){
                        // 如果res成功了
                        res.then((v) => {
                            resolve(v);
                        // 如果res失败了
                        },(r) => {
                            reject(r);
                        })
                    }else{
                        resolve(res);
                    }
                }catch(error){
                    reject(error);
                }
            })
            
        }

        if(this.PromiseState=='fulfilled'){
            callback(onResolved)
        }else if(this.PromiseState=='rejected'){
            callback(onRejected)
        
        }else if(this.PromiseState=='pending'){
            this.callbacks.push({
                onResolved:function(){
                    callback(onResolved)
                },
                onRejected:function(){
                    callback(onRejected);
                }
            })
        }
    })
    
}

Promise.prototype.catch=function(onRejected){
    return this.then(undefined,onRejected);
}

Promise.resolve=function(value){
    return new Promise((resolve,reject) => {
        if(value instanceof Promise){
            value.then((v) => {
                resolve(v)
            },(r) => {
                reject(r)
            })
        }else{
            resolve(value)
        }
    })
}

Promise.reject=function(reason){
    return new Promise((resolve,reject) => {
        reject(reason)
    })
}

// 返回一个新的promise对象
// 一个promise失败即结果就是该promise 否则返回所有成功promise的结果数组
Promise.all=function(promises){
    var count=promises.length;
    var result=[]
    return new Promise((resolve,reject) => {
        for(let i=0;i<promises.length;i++){
            promises[i].then((v) => {
                count--;
                result[i]=v
                console.log(i,result);
                if(count===0)resolve(result);
            },(r) => {
                reject(r);
            })
        }
    })
}

Promise.race=function(promises){
    return new Promise((resolve,reject) => {
        for(let i=0;i<promises.length;i++){
            promises[i].then((v) => {
                resolve(v)
            },(r) => {
                reject(r)
            })
        }
    })
}