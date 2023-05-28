/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num,n=0) {
    if(num==0){
        return n;
    }
    
    if(num%2==0){
        return numberOfSteps(Math.floor(num/2),n+1)
    }else{
        return numberOfSteps(num-1,n+1)
    }
    
};