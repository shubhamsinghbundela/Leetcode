/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let sorted=[...nums].sort((a,b)=>a-b);
  // console.log(sorted)
  let nums1=nums.map(num=>sorted.indexOf(num))
  return nums1
};