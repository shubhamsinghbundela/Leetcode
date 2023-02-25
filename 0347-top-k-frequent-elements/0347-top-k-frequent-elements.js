/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj={}
    for(let i=0;i<nums.length;i++){
      if(obj[nums[i]]){
        obj[nums[i]]++
      }else{
        obj[nums[i]]=1
      }
    }
  // console.log(obj)
  let arr=Object.entries(obj).sort((a,b)=>b[1]-a[1]).slice(0,k)
  // console.log(arr)
  let arr1=[]
  for(let i=0;i<arr.length;i++){
    arr1.push(+arr[i][0])
  }
  // console.log(arr1)
    return arr1
};