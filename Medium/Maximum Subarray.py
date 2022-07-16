# Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

# A subarray is a contiguous part of an array.

 

# Example 1:

# Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
# Output: 6
# Explanation: [4,-1,2,1] has the largest sum = 6.
# Example 2:

# Input: nums = [1]
# Output: 1
# Example 3:

# Input: nums = [5,4,-1,7,8]
# Output: 23
 

# Constraints:

# 1 <= nums.length <= 105
# -104 <= nums[i] <= 104
 

# Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

# Kadane Algorithm
# [2,1,4,7,-13,-20,-2,23,27,29]
# curr_sum=2 3 7 14 1-19 -22 0 23 50  79
# max_sum= 2 3 7 14 23 50 79


def solve(n, arr):
    curr_sum=0
    max_sum=-999999
    for x in arr:
        curr_sum+=x
        if max_sum<curr_sum:
            max_sum=curr_sum
        if curr_sum<0:
            curr_sum=0
    return max_sum