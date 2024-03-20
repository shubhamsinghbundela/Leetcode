/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
  let elemSum=0
  for(let i=0;i<nums.length;i++){
    elemSum+=nums[i];
  }
  // console.log(elemSum);
  let digitSum=0;
  for(let i=0;i<nums.length;i++){
    while(Math.floor(nums[i])!=0){
      let rem=nums[i]%10;
      digitSum+=Math.floor(rem);
      nums[i]=nums[i]/10;
    }
  }
  return Math.abs(elemSum-digitSum);
};