/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let left=0;
  let right=height.length-1;
  let maxL=0
  let maxR=0
  let res=0
  while(left<=right){
    if(height[left]<=height[right]){
      if(height[left]>=maxL){
        maxL=height[left]
      }else{
        res+=maxL-height[left]
      }
      left++;
    }
    else{
      if(height[right]>=maxR){
        maxR=height[right]
      }else{
        res+=maxR-height[right]
      }
      right--
    }
  }
  return res;
};