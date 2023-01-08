/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map={};
  for(let i=0;i<nums.length;i++){
    let another=target-nums[i];
    if(another in map){
      return [map[another],i]
    }else{
      map[nums[i]]=i;
    }
  }
  
};