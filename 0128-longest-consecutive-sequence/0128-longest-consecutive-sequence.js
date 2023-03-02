/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let nums1=new Set(nums);
  let maxCount=1;
  if(nums.length==0){
      return 0
  }
  for(let num of [...nums1]){
    if(nums1.has(num-1)){
      continue;
    }
    let count=1;
    let current=num
    const isStreak = () =>nums1.has(current+1)
    while(isStreak()){
      count++
      current++
    }
    maxCount=Math.max(maxCount,count);
  }
  return maxCount
  
};