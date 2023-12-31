/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let i=0;
  let l=0;
  let r=nums.length-1;
  while(i<=r){
    let num=nums[i];
    if(num===0){
      swap(nums,i,l);
      i++;
      l++
    }else if(num===2){
      swap(nums,i,r)
      r--;
    }else{
      i++;
    }
  }
  return nums;

};
 var swap = function(nums,a,b){
  [nums[a],nums[b]]=[nums[b],nums[a]]
}