//2 sum = given an array of integers (whole numbers) find the indices of two numbers that add up to a given target. 
// [1,3,5,7, 9, 2] = 11; indices 4 & 2 cause 9 + 2 = 11

// keeping track and moving downn is 2 pointer technique. 
// initialize pointer and then have another pointer , they move based on some logic you decide. 
const sum2 = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {

                return [i, j]; 
            }
        }
    }
    return 'combo not found'; 
};
console.log(sum2([1,3,5,9,2], 10)); 