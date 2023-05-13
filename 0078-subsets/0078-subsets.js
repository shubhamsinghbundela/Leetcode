/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let n = nums.length;
  let powerSet = [];
  for(let i=0;i<Math.pow(2,n);i++){
    let arr = [];
    for(let j=0;j<n;j++){
      if((i&(1<<j))>0){
        arr.push(nums[j]);
      }
    }
   powerSet.push(arr);
  }
  return powerSet;
};