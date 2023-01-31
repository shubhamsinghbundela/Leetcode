/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let output=[];
  let left=1;
  let right=1;
  for(let i=nums.length-1;i>=0;i--){
    output[i]=right;
    right*=nums[i]
  }
  for(let j=0;j<nums.length;j++){
    output[j]*=left
    left*=nums[j]
  }
  return output
  // console.log(output)
};