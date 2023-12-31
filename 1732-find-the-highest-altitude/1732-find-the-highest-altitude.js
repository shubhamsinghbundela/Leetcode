/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let arr=[0];
    let total=0
    for(let i=0;i<gain.length;i++){
      total+=gain[i];
      arr.push(total);
    }
  return Math.max(...arr);
};