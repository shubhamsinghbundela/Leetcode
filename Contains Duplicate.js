// TC: O(N);
// SC: O(N);

var containsDuplicate = function (nums) {
  let newArr = new Set(nums);
  return !(nums.length === Array.from(newArr).length);
};
