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
// for find area cant do anything to separate loops cause need data from both to do calculations to compare. 
// so use shifting pointers or 2 pointer system
var maxArea = function(height) {
    let maxArea = 0, p1 = 0, p2 = height.length -1; 
    while (p1 < p2) {
        let lowerOne = Math.min(height[p1], height[p2]);
        let area = lowerOne * (p2-p1); 
        maxArea = Math.max(maxArea, area); 
        if (height[p1] <= height[p2]) {
            p1++
        } else {
            p2--
        }
    }
    return maxArea; 
};
// trapping rain water 
const getTrappedWater = (arrHeights) => {
    let maxWater = 0; 
    for (let i = 0; i > arrHeights.length; i++) {

    }
}



// Fibonacci and memoization - set of numbers that spiral out  0,1,1,2,3,5,8,etc so ad the 2 previous 
// memoization is caching numbers that we already calculated to make the algo more performant
// this memoization will make it O(n) instead of O(n^2); 
// --- recursive O(2^n) not very performant. 
function fib(indx) {
    if (indx < 3) return 1; 
    return fib(indx-1) + fib(indx -2); 
};
// performant with memoization O(n); 
function fibMem(indx, cache) {
    cache = cache || [];
    if (cache[indx]) return cache[indx];
    if (indx < 3) return 1;
    cache[indx] = fibMem(indx - 1, cache) + fibMem(indx -2, cache); 
    return cache[indx]; 
}
// leet code fib w/ memoization 
var climbStairs = function(n,memo) {
    memo = memo || [];
    if (memo[n]) return memo[n];    
    if (n <=3) return n; 
    memo[n] = climbStairs(n-1,memo) + climbStairs(n-2,memo);
    return memo[n]; 
};
// dynamic programming solution
/*
DP

dp[i] represents the total number of different ways to take i steps
So, we want to get dp[n].
dp[n] = dp[n-1] + dp[n-2] because we can either take 1 or 2 steps.

We have two base cases: dp[1] = 1 and dp[2] = 2 because
there is one way to take 1 step and there are two ways to take 2 steps (1 step + 1 step OR 2 step)
*/
var climbStairs = function(n) {
    let dp = new Array(n + 1);
    dp[1] = 1, dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
    // T.C: O(N)
    // S.C: O(N)
};
var climbStairs = function(n) {
    //if(n<=1) return 1
    let pre = 1
    let cur  = 1
    while(n >= 2){
        let temp = cur
        cur += pre 
        pre = temp
        n--
    }
    return cur
}
//reverse string
var reverseString = function(s) {
    var mid = Math.floor(s/2);
    var p1 = 0; 
    for (var i = s.length-1; i>mid; i--){
        var firstVal = s[p1];
        s[p1] = s[i];
        s[i] = firstVal;
        p1++
    }
    return s; 
};
// console.log(reverseString(['h','e','l','l','o']));

// sliding window pattern - create a window that can either be an array or number from one position to another 
// condition causes window to increase or close and new window created, good for finding subset of data in array or string
// good for finding length of string with unique characters in that string
// good for maxSubArraySum where array of integers and number n , should calc max sum of n  consecutive elements. 
// [1,2,5,2,8,1,5], 2 => 10; [1,2,5,2,8,1,5], 4 => 17

// Naive way 
function maxSubArraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num +1; i++) {
        let tempAdd = 0; 
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        max = temp > max ? temp : max; 
    }
    return max
};
// now O(n) 
function maxSubArraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++ ) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        // add next array item and subtract the first array item. 
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum; 
}
// DIVIDE AND CONQUER - Pattern involves dividing data into smaller chunks and then repeating process with subset of data
// sounds like dynamic programming,  decrease time complexity
// binary search is divide and conquer. 
// naive
function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return arr[i];
        }
    }
    return -1; 
}
// Binary search approach  [1,3,5,10,23,88,99,100,122,123,155,203],122
// O(log n); 
function binarySearch (arr, val) {
    let min = 0;
    let max = arr.length -1; 
    while (min <= max) {
        let middle = Math.floor((min + max) / 2); 
        let currElem = arr[middle];
        if (arr[middle] < val) {
            min = middle + 1;
        } else if (arr[middle] > val) {
            max = middle - 1; 
        } else {
            return middle; 
        }
    }
    return -1; 
}
// frequency counter 
function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary. 
  let firstObj = {}; 
  let first = num1.toString().split(''); 
  let second = num2.toString().split(''); 
  if (first.length !== second.length) {
    return false; 
  }
  for (let i = 0; i < first.length; i++) {
      firstObj[first[i]] ? firstObj[first[i]]++ : firstObj[first[i]] = 1; 
  }
  for (let i = 0; i < second.length; i++) {
    if (!firstObj[second[i]]) {
      return false; if 
      firstObj[second[i]]--;
      if (firstObj[second[i]] < 0) {
        return false; 
      }
    }
  }
  return true; 
}
// areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}
// areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}
// areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}