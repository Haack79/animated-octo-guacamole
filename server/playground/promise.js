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

