/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
  let start=0;
  let end = nums.length-1;
  if(nums[start]<nums[end]){
    return binarySearch(nums,start,end,target)
  }
  let pivot = findPivot(nums,start,end);
  // console.log(pivot);
  if(nums[pivot]===target){
    return pivot;
  }else if(nums[0]<=target){
    return binarySearch(nums,start,pivot,target);
  }else{
     return binarySearch(nums,pivot+1,end,target);
  }
}

function findPivot(arr,start,end){
  if(start===end){
    return start
  }
  let mid = Math.floor((start+end)/2);
  // console.log(mid);
  if(arr[mid]>arr[mid+1]){
    // console.log('19')
    return mid;
  }else if(arr[mid]<arr[mid-1]){
    return mid-1
  }else if(arr[start]>arr[mid]){
    return findPivot(arr,start,mid-1);
  }else{
    return findPivot(arr,mid+1,end);
  }
}

function binarySearch(arr,l,r,target){
  if(l>r){
    return -1;
  }
  while(l<=r){
    let mid = Math.floor((l+r)/2);
    if(arr[mid]===target){
      return mid;
    }else if(arr[mid]>target){
      r=mid-1;
    }else{
      l=mid+1;
    }
  }
  return -1;
}