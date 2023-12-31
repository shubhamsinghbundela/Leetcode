/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
  let nums=[];
  for(let i=0;i<n;i++){
    nums[i]=start+2*i;
  }
  // console.log(nums)
  let result = nums[0];
  for(let i=1;i<n;i++){
    result=result^nums[i]
  }
  return result
};