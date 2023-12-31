/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(arr1, arr2) {
  let nums=[]
    if(arr1.length<=arr2.length){
        for(let i=0;i<arr1.length;i++){
          for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
              nums.push(arr1[i]);
              arr2[j]=-1;
              break;
            }
          }
        }
    }else{
      for(let i=0;i<arr2.length;i++){
          for(let j=0;j<arr1.length;j++){
            if(arr2[i]==arr1[j]){
              nums.push(arr2[i]);
              arr1[j]=-1;
              break;
            }
          }
        }
    }
  // console.log(nums)
  // console.log([...new Set(nums)])
  // return [...new Set(nums)]
  return nums
};