/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
  logs.sort(function(a,b) {
    return a[1]-b[1]
  })
  let map = new Map();
  for(let i=0;i<logs.length;i++){
    for(let j=logs[i][0];j<logs[i][1];j++){
      if(map.has(j)){
        map.set(j,map.get(j)+1);
      }else{
         map.set(j,1)
      }
    }
  }
  let arr=[]
  for(let s of map){
    arr.push(s);
  }
  let maximumPopulation=0;
  let earliestYear=arr[0][0];
  for(let i=0;i<arr.length;i++){
    if(arr[i][1]>maximumPopulation){
      maximumPopulation=arr[i][1];
      earliestYear=arr[i][0]
    }
  }
  return earliestYear;
};