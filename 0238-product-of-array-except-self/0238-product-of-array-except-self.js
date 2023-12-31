/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let left=[]
  let right=[]
  let product=[]
  for(let i=0;i<nums.length;i++){
    left[i]=1
    right[i]=1
  }
  
  // console.log(left)
  // console.log(right)
  for(let i=1;i<nums.length;i++){
    left[i]=nums[i-1]*left[i-1]
  }
  // console.log(left)
  for(let i=nums.length-2;i>=0;i--){
    right[i]=nums[i+1]*right[i+1]
  }
  // console.log(right)
   for(let i=0;i<nums.length;i++){
    product.push(left[i]*right[i])
  }
  return product
  
};