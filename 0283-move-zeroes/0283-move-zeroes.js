/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i1;
  for(let j=0;j<nums.length;j++){
        if(nums[j]===0){
            i1=j
            break;
        }
        if(j===nums.length-1){
            return nums
        }
    }
    for(let i=i1+1;i<nums.length;i++){
      if(nums[i]!==0){
        nums[i1]=nums[i];
        nums[i]=0;
        i1++;
      }
    }
  return nums
};