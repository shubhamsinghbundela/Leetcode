/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(arr) {
   let min=arr[0];
  let cur_profit=0
  for(let i=1;i<=arr.length-1;i++){
    if(arr[i]>min){
      cur_profit+=arr[i]-min;
      if(arr[i]>arr[i+1]){
          min=arr[i+1]
      }else{
           min=arr[i]
      }
    }
    if(arr[i]<min){
      min=arr[i]
    }
  }
  return cur_profit; 
};