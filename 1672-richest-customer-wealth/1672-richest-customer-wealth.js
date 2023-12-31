/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let accounts1=[];
  for(let i=0;i<accounts.length;i++){
    accounts1.push(accounts[i].reduce((acc,cur)=>acc+cur,0))
  }
  return Math.max(...accounts1)
  
};
maximumWealth([[1,2,3],[3,2,1]]);
maximumWealth([[1,5],[7,3],[3,5]]);