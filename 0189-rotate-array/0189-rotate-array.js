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
  for(let i=0;i<n-k;i++){
    temp.push(nums[i]);
  }
  console.log(temp); //[[1,2,3,4], [-1,-100]
  for(let i=0;i<k;i++){
    nums[i]=nums[n-k+i];
  }
  console.log(nums); //[5,6,7,4,5,6,7], [3,99,3,99]
  for(let i=k;i<n;i++){
    // console.log(i)
    nums[i]=temp[i-k];
  }
  // console.log(nums);
  return nums;
}