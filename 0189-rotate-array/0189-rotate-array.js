/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let n = nums.length
  if (n == 0)
    return;
  k = k % n;
  if (k > n)
    return;
  reverse(nums,0,n-k-1);
  reverse(nums,n-k,n-1);
  reverse(nums,0,n-1);
  return nums;
}

var reverse = function(arr,start,end){
  while(start<=end){
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp
    start++;
    end--;
  }
}