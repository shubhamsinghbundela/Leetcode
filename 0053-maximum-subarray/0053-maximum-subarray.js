/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(arr) { 
let sum=arr[0],sum1=arr[0]; 
  for(let i=1;i<arr.length;i++){
    sum=Math.max(sum+arr[i],arr[i]);
    sum1=Math.max(sum1,sum);
  }
  // console.log(sum);
  return sum1;
};