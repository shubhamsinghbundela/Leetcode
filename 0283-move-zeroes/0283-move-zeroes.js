/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let index=-1;
  for(let i=0;i<nums.length;i++){
    if(nums[i]!==0){
      index++;
      nums[index]=nums[i];
    }
  }
  console.log(nums);
  console.log(index)
  let count=index+1;
  while(count!==nums.length){
    nums[count]=0;
    count++;
  }
  return nums
};