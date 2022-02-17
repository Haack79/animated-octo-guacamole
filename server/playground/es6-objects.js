// object property shorthand
const name = 'Andrew';
const userAge = 27;
const user = {
    name,
    age: userAge,
    location: 'Philly'
};
console.log(user);
// const name = user.name;
const product = {
    label: 'notebooke',
    price: 3,
    stock: 201,
    salePrice: undefined
}
const { label, stock } = product; 
console.log(label, stock); 
///--can rename while destructuring
const { label:productLabel } = product;
console.log(productLabel); 
// can assign default value
const {rating =5} = product;
console.log(rating);
// can destructure when passing an argument into a function
const transaction = (type, {label, stock}) => {
    console.log(type, label, stock);
};
transaction('order', product); 