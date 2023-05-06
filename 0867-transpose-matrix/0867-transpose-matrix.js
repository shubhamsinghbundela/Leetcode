/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let arr=[]
    for(let i=0;i<matrix[0].length;i++){
       arr.push(new Array(matrix.length))
    }
    
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[0].length;j++){
            arr[i][j]=matrix[j][i]
        }
    }
    return arr;
};