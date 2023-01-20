/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
   let nums=[];
    for(let i=0;i<nums1.length;i++){
      let nums11=arr(nums1[i],nums2)
      if(nums11==undefined){
        nums.push(-1)
      }else{
        nums.push(nums11)
      }
      
    }
  return nums
  
};

function arr(n,nums2){
   let next = -1;
    for(let i=0;i<nums2.length;i++){
      if(n==nums2[i]){
          for (j = i + 1; j < nums2.length; j++){
            if (nums2[i] < nums2[j]){
              return(nums2[j]);
            }
         }
      }
    }
}