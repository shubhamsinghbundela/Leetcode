# Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

# Example 1:

# Input: nums = [3,0,1]
# Output: 2
# Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
# Example 2:

# Input: nums = [0,1]
# Output: 2
# Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
# Example 3:

# Input: nums = [9,6,4,2,3,5,7,0,1]
# Output: 8
# Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 

# Constraints:

# n == nums.length
# 1 <= n <= 104
# 0 <= nums[i] <= n
# All the numbers of nums are unique.
 
#  1. Brute force method
n=5
arr= 0,5,3,2,4
sum of 0 to n -> n(n+1)//2 ->5*6//2 = 15
sum of arr = 14
15-14=1(1 is missing)
def solve(n, arr):
    n=len(arr)
    return (n*(n+1))//2 - sum(arr)


# 2, XOR Method
n=6
arr=[2,0,1,3,5,6]
0,1,2,3,4,5^6 5 1 3 2 0 1 ->4 
def solve(n, arr):
    ans = n
    for i in range(n):
        ans = ans ^ i ^ arr[i]
    return ans