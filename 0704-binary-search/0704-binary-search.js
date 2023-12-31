/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let result = bSearch(nums,target,0,nums.length-1);
    return result;
};

var bSearch = function(nums,target,left,right){
    
    let mid = Math.floor((left+right)/2);
    if(left>right){
        return -1;
    }
    if(nums[mid]===target){
        return mid;
    }else if(nums[mid]<target){
        return bSearch(nums,target,mid+1,right)
    }else{
        return bSearch(nums,target,left,mid-1)
    }
}