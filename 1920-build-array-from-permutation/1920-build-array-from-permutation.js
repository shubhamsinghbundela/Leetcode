/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans = nums.map(e=>nums[e]);
    return ans;
};