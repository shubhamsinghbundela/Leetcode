/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    n=matrix.length
    let arr=[];
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      arr.push(matrix[i][j])
    }
  }
  // console.log(arr);
  let sortedArr= arr.sort((a,b)=>a-b);
  console.log(sortedArr)
  return sortedArr[k-1]
};