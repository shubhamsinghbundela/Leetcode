/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    let ans = [];
     if(arr.length==1){
        for(let i=0;i<queries.length;i++){
            ans.push(arr[0])
        }
    }else{
        for(let i=0;i<queries.length;i++){
            let operation = 0;
            for(let j=queries[i][0];j<=queries[i][1];j++){
                operation=operation^arr[j]
            }
            ans.push(operation);
        }
    }
    
    return ans;
};