/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let nums1=[];
  let l1=nums.splice(0,n);
  console.log(l1);
  let l2=nums.splice(-n);
  console.log(l2);
  for(let i=0;i<n;i++){
    nums1.push(l1[i]);
    nums1.push(l2[i]);
  }
  return nums1;
};