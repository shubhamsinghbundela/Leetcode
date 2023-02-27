/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let product=[];
  
  for(let i=0;i<nums.length;i++){
    let count=1
    for(let j=0;j<nums.length;j++){
      if(i!=j){
        count*=nums[j]
        
      }
    }
    product[i]=count
  }
  return product
};