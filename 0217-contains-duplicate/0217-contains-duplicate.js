/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let obj={};
  // let count=0;
  nums.forEach(e=>{
    if(e in obj){
      obj[e]+=1;
    }else{
      obj[e]=1;
    }
  })
  
  for(let key in obj){
    if(obj[key]>1){
      return true;
      break;
    }
  }
  
  return false;
  
};