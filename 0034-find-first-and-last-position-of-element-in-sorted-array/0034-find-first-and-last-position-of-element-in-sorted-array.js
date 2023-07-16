/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let n = nums.length
  let l = 0;
  let r = n-1;
  let arr = [];
  while(l<=r){
    let mid = Math.floor((l+r)/2)
    if(nums[mid]<target){
      l=mid+1;
    }else if(nums[mid]>target){
      r=mid-1
    }else if(nums[mid]===target){
      console.log(l)
      console.log(mid)
      while(l<mid){
        // console.log('16')
        if(nums[l]===target){
          arr.push(l)
          break;
        }
        l++;
      }
      // console.log(arr)
      if(l===mid){
        arr.push(mid)
      }
      while(mid<r){
        if(nums[r]==target){
          arr.push(r)
          break;
        }
        r--
      }
      if(mid==r){
        arr.push(mid)
      }
      return arr;
    }
  }
  return [-1,-1]
}