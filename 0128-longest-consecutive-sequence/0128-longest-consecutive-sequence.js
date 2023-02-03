/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
  if(!nums.length){
    return 0;
  }
  let nums1=nums.sort((a,b)=>a-b)
  // console.log(nums1)
  return search(nums1)
}
var search = function(nums1){
  let [maxScore,score]=[1,1]
  for(let i=0;i<nums1.length;i++){
    let prev=nums1[i]===nums1[i-1]
    if(prev){
      continue;
    }
    let newScore=nums1[i]===nums1[i-1]+1
    if(newScore){
      score++;
      continue;
    }
    maxScore=Math.max(maxScore,score);
    score=1
  }
  return Math.max(maxScore, score);
}


