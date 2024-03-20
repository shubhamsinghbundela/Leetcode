/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
  let leftSum=[];
  leftSum[0]=0;
  let rightSum=[];
  rightSum[nums.length-1]=0;
  for(let i=0;i<nums.length-1;i++){
    leftSum[i+1]=leftSum[i]+nums[i];
  }
  // console.log(leftSum);  //[0,10,14,22]
  for(let i=nums.length-2;i>=0;i--){
    rightSum[i]=rightSum[i+1]+nums[i+1];
  }
  // console.log(rightSum); //[15,11,3,0]
  let ans=[];
  for(let i=0;i<nums.length;i++){
    ans[i]=Math.abs(leftSum[i]-rightSum[i])
  }
  return ans;
};