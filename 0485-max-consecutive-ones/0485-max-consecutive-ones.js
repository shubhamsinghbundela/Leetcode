/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(arr) {
  let max=0;
  let count=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]===0){
      count=0;
    }else{
      count++;
      max = Math.max(count, max);
    }
  }
  
  return max;
};