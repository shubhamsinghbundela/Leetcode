/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
  const map = getMap(nums);       
  // console.log(getMap(nums))
  return getSum(nums, target, map)
}

const getMap = (nums, map = new Map()) => {
  for (let index = 0; index < nums.length; index++) {
      map.set(nums[index], index);                        
  }
  
  return map
   
}

const getSum = (nums, target, map) => {
  for (let index = 0; index < nums.length; index++) {
      const complement = target - nums[index];
      const sumIndex = map.get(complement);

      const isTarget = map.has(complement) && (map.get(complement) !== index)
      if (isTarget) return [ index, sumIndex ]
  }

  return [ -1, -1 ];
}