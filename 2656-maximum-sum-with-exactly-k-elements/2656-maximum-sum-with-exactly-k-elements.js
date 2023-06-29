/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
  let max=nums[0];
  for(let i=1;i<nums.length;i++){
    if(nums[i]>max){
      max=nums[i]
    }
  }
  // console.log(max);
  let sum=0;
  for(let i=0;i<k;i++){
    sum+=max;
    max++;
  }
  // console.log(sum);
  return sum;
};