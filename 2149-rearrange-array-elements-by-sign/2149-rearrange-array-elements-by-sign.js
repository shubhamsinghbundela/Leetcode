/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  let nums1=[];
  let nums2=[];
  let nums3=[];
  for(let i=0;i<nums.length;i++){
    if(nums[i]<0){
      nums2.push(nums[i]);
    }else{
      nums1.push(nums[i]);
    }
  }
  let m=0, n=0;
  while(m<nums1.length && n<nums2.length){
    nums3.push(nums1[m]);
    nums3.push(nums2[n]);
    m++;
    n++;
  }
  return nums3;
};