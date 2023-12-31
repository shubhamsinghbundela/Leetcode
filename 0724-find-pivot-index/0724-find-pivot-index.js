/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let nums1=nums.reduce((a,b)=>a+b,0)
    // console.log(nums1)
  let pos=0;
  let leftPos=0;
  while(pos<=nums.length-1){
    if(leftPos===nums1-nums[pos]-leftPos){
      return pos
    }
  
  leftPos+=nums[pos];
  pos++;
  }
  return -1;
  
};