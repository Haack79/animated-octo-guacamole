const doWorkCallBack = (callback) => {
    setTimeout(() => {
        // callback('thisis my error!', undefined);
        callback(undefined, [1,4,7]);
    }, 2000)
}
doWorkCallBack((err, res) => {
    if (err) {
        return console.error(err);
    }
    console.log(res);
});

// promise -----
const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([7,4,1]);
        reject('thing went wrong'); 
    }, 2000)
});
// promise is just object with methods we can access
doWorkPromise.then((result) => {
    console.log('success', result); 
}).catch((error) => {
    console.error('error', error); 
});

//promise is pending until resolved or rejected is called
const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}
add(1,2).then((sum) => {
    console.log(sum)
    add(sum, 5).then((sum2) => {
        console.log(sum2);
    }).catch((err) => {
        console.log(err); 
    })
}).catch((err) => {
    console.error(err);
})
// PROMISE CHAINING 
add(1,1).then((sum) => {
    console.log(sum)
    return add(sum, 5)
}).then((sum2) => {
    console.log(sum2); 
}).catch((err) => {
    console.log(err); 
});
