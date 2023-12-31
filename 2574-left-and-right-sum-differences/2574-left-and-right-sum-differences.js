/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
  let leftSum =[0];
  for(let i=1;i<nums.length;i++){
    leftSum[i]= leftSum[i-1] + nums[i-1];
  }
  // console.log(leftSum)
  let rightSum =[];
  rightSum[nums.length-1]=0;
  for(let i=nums.length-2;i>=0;i--){
    rightSum[i]=rightSum[i+1]+nums[i+1];
  }
  // console.log(rightSum)
  let answer=[];
  for(let i=0;i<nums.length;i++){
    answer[i]=Math.abs(leftSum[i]-rightSum[i])
  }
  return answer;
};