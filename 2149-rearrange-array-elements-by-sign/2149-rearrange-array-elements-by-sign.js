/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  let i=0;
  let j=1;
  let ans = [];
  for(let k=0;k<nums.length;k++){
    if(nums[k]>0){
      ans[i]=nums[k];
      i+=2;
    }
    if(nums[k]<0){
      ans[j]=nums[k];
      j+=2
    }
  }
  return ans;
};