/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            if(i==j){
                sum+=mat[i][j];
            }
            if(i!=j && j== mat.length-1-i){
                sum+=mat[i][j]
            }
        }
    }
    return sum;
};