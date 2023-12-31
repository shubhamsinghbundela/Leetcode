/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums=nums.sort((a,b)=>a-b);
  let nums1=[]
  for(let i=0;i<nums.length;i++){
    let a=nums[i]
    if(i>0 && a===nums[i-1]){
      continue;
    }
    j=i+1;
    k=nums.length-1;
    while(j<k){
      let threeSum=nums[i]+nums[j]+nums[k]
      if(threeSum<0){
        j++;
      }else if(threeSum>0){
        k--;
      }else{
        nums1.push([nums[i],nums[j],nums[k]])
        j++;
        k--;
        while (nums[j] === nums[j - 1] && j <k) {
                    j++;
                }
      }
    }
  }
  return nums1
};