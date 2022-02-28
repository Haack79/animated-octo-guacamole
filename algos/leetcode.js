//2 sum = given an array of integers (whole numbers) find the indices of two numbers that add up to a given target. 
// [1,3,5,7, 9, 2] = 11; indices 4 & 2 cause 9 + 2 = 11
// n^2 solution
const numsArr = [9,3,5,1,2];
const total = 11;  
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
// console.log(sum2(numsArr, total)); 

// optimize with object {0: 10, 1: 8} - above adding to find 2 numbers adding up to target. 
// below if we can keep track of which indx has a number that is equal to the diff between target and curent
// number, that would be the match. 
// O(n) time ; space O(n); 
var twoSumHash = function(nums, target) {
        const targetObj = {};
    for (let i = 0; i < nums.length; i++) {
        if (targetObj[nums[i]] >= 0) {
            return [targetObj[nums[i]], i];
        } else {
            const numToFind = target - nums[i];
            targetObj[numToFind] = i; 
        }
    } 
    return null; 
};

// console.log(twoSumHash(numsArr, total)); 

// find duplicates in an array; 
var containsDuplicate = function(nums) {
    const exists = {};
    for (let i = 0; i <nums.length; i++) {
        let currentVal = nums[i];
        if (exists[currentVal]) {
            return true;
        } else {
            exists[currentVal] = i+1; 
        }
    }  
    return false; 
};
// console.log(containsDuplicate([1,2,3,1]))

// find missing number 
// [3,0,1] missing num is 2
var missingNumber = function(nums) {
    let total = 0;
    let arrTotal = 0; 
   for (let i = 1; i<nums.length; i++) {
        total += i;
        arrTotal += nums[i-1]; 
   }
   return (total + nums.length + 1) - arrTotal; 

};
// console.log(missingNumber([3,0,1]));

/*
find biggest area , length x width
line width doesn't matter, sides of array dont matter
line within two points doesnt matter 
*/
// [] or [one element] = 0
// [1,3,2,8];    

const findArea = (arr) => {
    let maxArea = 0;  
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j<arr.length; j++) {
            let shortest = arr[i] < arr[j] ? arr[i] : arr[j];
            let length = i - j;
            let area = shortest * length;
            if (area > maxArea) {
                maxArea = area; 
            }
        }
    }
    return maxArea;
}
findArea([7,1,2,3,9]);