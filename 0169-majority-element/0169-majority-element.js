/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let n=new Map();
  for(let i=0;i<nums.length;i++){
    if(!n.has(nums[i])){
      n.set(nums[i], 1)
    }else{
      let o=n.get(nums[i])
      n.set(nums[i],o+1)
    }
  }
  // console.log(n)
  for(let [key,value] of n){
    if(value>nums.length/2){
      return key
    }
  }
};