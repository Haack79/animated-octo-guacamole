setTimeout(() => {
    console.log('2 seconds up');
},);
// callback function is just a function passed to another function as an argument. 
// it is just decided it will be called by the function at a point in time down the road. 
// callbacks are not always async, they can be run synchronously 
// const names = ['brian', 'susie', 'ezra'];
// const shortnamesCAllback = names.filter((name) => {
//     return name.length <= 4; 
// });

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longititude: 0
//         }
//         callback(data); 
//     },2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data); 
// })
const add = (a,b,callback) => {
    setTimeout(() => {
        const total = a + b;
        callback(total); 
    },2000);
}
add(1,4, (sum) => {
    console.log(sum);
})