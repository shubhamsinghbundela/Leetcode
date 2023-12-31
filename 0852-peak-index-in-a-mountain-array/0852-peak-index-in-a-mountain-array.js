/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  let n = arr.length
  let left = 0;
  let right = n-1;
  while(left <= right){
    let mid = Math.floor((left + right)/2);
    if(arr[mid]>=arr[mid-1] && arr[mid]>=arr[mid+1]){
      return mid
    }else if(arr[mid]<arr[mid-1]){
      right=mid-1
    }else{
      left = mid+1;
    }
  }
};