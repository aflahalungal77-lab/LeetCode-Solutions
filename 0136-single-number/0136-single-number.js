/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let frequency = 0;

        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                frequency++;
            }
        }

        if (frequency === 1) {
            return nums[i];
        }
    }
};