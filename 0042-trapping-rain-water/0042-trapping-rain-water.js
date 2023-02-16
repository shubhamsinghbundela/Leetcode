/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let leftWater=[];
  let rightWater=[];
  let leftRightWater=[];
  let current=0
  for(let i=0;i<height.length;i++){
    leftWater.push(current)
    current=Math.max(current,height[i])
  }
  console.log(leftWater)
  current=0
  for(let i=height.length-1;i>-1;i--){
    rightWater.push(current)
    current=Math.max(current,height[i])
  }
  // console.log(rightWater)
  rightWater.reverse()
  console.log(rightWater)
  for(let i=0;i<height.length;i++){
    leftRightWater[i]=Math.min(leftWater[i],rightWater[i])
  }
  console.log(leftRightWater)
  let water=0
  for(let i=0;i<height.length;i++){
    if(leftRightWater[i]-height[i]>0){
      water+=leftRightWater[i]-height[i]
    }
  }
  return water
  
};