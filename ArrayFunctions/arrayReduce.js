// Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

// A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

// If the length of the array is 0, it should return init.


/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // If nums array is empty, return the initial value
    if (nums.length === 0) {
        return init;
    }

    let result = init;

    // Iterate through the nums array and apply the reducer function
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }

    return result;
};

// Example usage
const nums1 = [1, 2, 3, 4];
const fn1 = function sum(accum, curr) { return accum + curr; };
const init1 = 0;
console.log(reduce(nums1, fn1, init1));  // Output: 10

const fn2 = function sumOfSquares(accum, curr) { return accum + curr * curr; };
const init2 = 100;
console.log(reduce(nums1, fn2, init2));  // Output: 130

const nums3 = [];
const fn3 = function sum(accum, curr) { return 0; };
const init3 = 25;
console.log(reduce(nums3, fn3, init3));  // Output: 25
