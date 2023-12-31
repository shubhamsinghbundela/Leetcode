/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        let count=0;
        while(Math.floor(nums[i])!=0){
            count+=1;
            nums[i]/=10;
        }
        if(count%2==0){
            sum+=1;
        }
    }
    return sum;
};