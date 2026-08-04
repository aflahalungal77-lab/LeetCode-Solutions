/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let result=[];
    for(i=0;i<nums.length*2;i++){
        result.push(nums[i%nums.length]);
    }
    return result;
};