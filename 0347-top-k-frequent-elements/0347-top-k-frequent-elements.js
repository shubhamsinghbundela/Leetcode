/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj=new Map()
    for(let i=0;i<nums.length;i++){
      if(obj.has(nums[i])){
        obj.set(nums[i],obj.get(nums[i])+1)
      }else{
        obj.set(nums[i],1)
      }
    }
  // console.log(obj.get(1))
  
   let arr=Array.from(obj).sort((a,b)=>b[1]-a[1]).slice(0,k)
   // console.log(arr)
    let arr1=[]
  for(let i=0;i<arr.length;i++){
    arr1.push(+arr[i][0])
  }
    return arr1
  
};