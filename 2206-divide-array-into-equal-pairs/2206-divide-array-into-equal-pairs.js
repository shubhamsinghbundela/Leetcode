/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let nums1 = nums.sort((a,b)=>a-b)
    console.log(nums1)
  let i=0;
  let j=1;
  let count=0;
  while(i!==nums1.length){
    if(nums1[i]===nums1[j]){
      count++
      i=j+1;
      j=i+1;
      // console.log(i,j)
    }else{
      // console.log('13')
      return false;
    }
  }
  // return true;
  let n= nums.length/2
  if(n==count){
    return true
  }
};

        
