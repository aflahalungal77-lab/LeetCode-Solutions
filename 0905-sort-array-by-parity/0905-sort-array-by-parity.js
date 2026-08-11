/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let result = [];

    // First add even numbers
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            result.push(nums[i]);
        }
    }

    // Then add odd numbers
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            result.push(nums[i]);
        }
    }

    return result;
};