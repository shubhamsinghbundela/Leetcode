/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
  let elemSum=0;
  for(let i=0;i<nums.length;i++){
    elemSum+=nums[i];
  }
  console.log(elemSum)
  let digitSum=0
  for(let i=0;i<nums.length;i++){
    if(String(nums[i]).length>1){
        while(nums[i]>0){
            let rem=nums[i]%10;
            digitSum+=rem;
            nums[i]=Math.floor(nums[i]/10);
        }
    }else{
        digitSum+=nums[i];
    }
  }
  console.log(digitSum)
  return elemSum-digitSum
};