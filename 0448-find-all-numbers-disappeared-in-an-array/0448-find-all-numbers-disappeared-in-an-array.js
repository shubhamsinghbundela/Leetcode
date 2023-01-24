/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let nums1=new Set();
  for(let i=1;i<=nums.length;i++){
    nums1.add(i)
  }
  // console.log(nums1)
  nums.forEach(e=>{
    if(nums1.has(e)){
      nums1.delete(e)
    }
  })
  return Array.from(nums1)
};