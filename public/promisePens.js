let promise = new Promise(function(resolve, reject){
    console.log('Promise Done');
    let a= 67, b='6';
    //resolve(a*b);
    //reject('a*b');
    //reject(new Error('a*b'));
});

promise.then(
    result => console.log(result),
    error => console.log(error)
);

promise.catch(error => console.log(error));

function delay(ms){
    // return new Promise(function(resolve, reject){
    //     setTimeout(resolve,ms);
    // });
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log('running after 3ms delay'));

function showCircle(a,b,c){
    return new Promise(function(resolve,reject){
        let d= b;
        let e=c;
        resolve(`p1 ${a}`);
    });
}

showCircle(10,20,30)
.then(function(result){
    return new Promise(function (resolve, reject){
        console.log(`1st --> ${result}`);
        resolve(`${result} p2 d`)
    });
}).then(function(result){
    return new Promise(function (resolve, reject){
        console.log(`2nd --> ${result}`);
        resolve(`${result} p3 c`)
    });
}).then(function(result){
    console.log(`final --> ${result}`)
});

showCircle(100,200,300)
.then(function(result){
    return new Promise(function (resolve, reject){
        console.log(`1st --> ${result}`);
        reject(`${result} p2 d`)
    });
}).then(function(result){
    return new Promise(function (resolve, reject){
        console.log(`2nd --> ${result}`);
        reject(`${result} p3 c`)
    });
}).then(function(result){
    console.log(`final --> ${result}`)
}).catch(e => console.error(`error block --> ${e}`));