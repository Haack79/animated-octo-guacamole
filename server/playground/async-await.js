// async returns a promise that has the value in it. 
const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a<0 || b< 0) {
                return reject('numbs must not b negative.'); 
            }
            resolve(a+b);
        }, 2000)
    })
};
const doWork = async() => {
    const sum = await add(1,99); 
    const sum2 = await add(sum, 50);
    const sum3 = sum2 + 232;
    return sum3;  
}

// const doWork = async() => {
//     return 'Brian'
// };

doWork().then((result) => {
    console.log('rsult', result);
}).catch((err) => {
    console.log(err); 
})
