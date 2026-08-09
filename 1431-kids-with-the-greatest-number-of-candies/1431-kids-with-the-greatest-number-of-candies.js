/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max=0;
    for(let i=0;i<candies.length;i++){
        if(max<=candies[i]){
            max=candies[i];
        }
    }
    let result=[];
    for(i=0;i<candies.length;i++){
        result.push(candies[i]+extraCandies>=max)
    }
    return result;
};