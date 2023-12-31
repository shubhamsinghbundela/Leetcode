/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let candies1=[];
    for(let i=0;i<candies.length;i++){
        let sum=candies[i]+extraCandies;
        for(let j=0;j<candies.length;j++){
            if(sum<candies[j]){
                candies1.push(false)
                break;
            }
        }
        if(candies1[i]!==false){
            candies1.push(true);
        }
        
    }
    return candies1;
    
};