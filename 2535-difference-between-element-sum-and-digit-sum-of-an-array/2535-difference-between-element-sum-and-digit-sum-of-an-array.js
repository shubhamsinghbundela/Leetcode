/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
  let elemSum=0;
  for(let i=0;i<nums.length;i++){
    elemSum+=nums[i];
  }
  // console.log(elemSum)
  let nums1=nums.join('').split('');
  let digitSum=0
  for(let i=0;i<nums1.length;i++){
    digitSum+=Number(nums1[i])
  }
  // console.log(digitSum)
  return elemSum-digitSum
};