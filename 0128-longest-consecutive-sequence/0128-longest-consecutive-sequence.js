/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let maxScore=1;
  let count=1;
  if(nums.length==0){
      return 0;
  }
  let nums1=nums.sort((a,b)=>a-b)
  console.log(nums1)
  for(let i=1;i<nums1.length;i++){
    if(nums[i]==nums[i-1]){
      continue;
    } 
    if(nums[i]==nums[i-1]+1){
      count+=1
      continue;
    }
    maxScore=Math.max(maxScore,count);
    count=1
    
  }
  return Math.max(maxScore,count)
  
};