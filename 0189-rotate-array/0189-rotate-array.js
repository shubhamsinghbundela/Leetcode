/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let temp=[];
  let n=nums.length;
  if (n == 0)
    return;
  k = k % n;
  if (k > n)
    return;
  for(let i=n-k;i<n;i++){
    temp.push(nums[i]);
  }
  // console.log(temp); //[5,6,7], [3,99]
  for(let i=n-1-k;i>=0;i--){
    nums[i+k]=nums[i];
  }
  // console.log(nums); //[1,2,3,1,2,3,4], [-1,-100,-1,-100]
  for(let i=0;i<k;i++){
    // console.log(i)
    nums[i]=temp[i];
  }
  // console.log(nums);
  return nums;
}