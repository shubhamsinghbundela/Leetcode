/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let rows=[];
    if(numRows==1){
      rows.push([1])
    }else if(numRows==2){
      rows.push([1])
      rows.push([1,1])
    }else if(numRows>2){
      rows.push([1])
      rows.push([1,1])
      for(let i=2;i<numRows;i++){
        let subArray = [];
        subArray.push(1);
        for(let j=0;j<rows[i-1].length-1;j++){
          subArray.push(rows[i-1][j]+rows[i-1][j+1])
        }
        subArray.push(1);
        rows.push(subArray)
      }
      
    }
    return rows;
  };