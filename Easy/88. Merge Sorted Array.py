# You are given two integer arrays arr1 and arr2 which are sorted in a non-decreasing order and there are two numbers m and n which represent the number of elements in arr1 and arr2 respectively.
# Your task is to merge arr1 and arr2 into a single array sorted in non-decreasing order.
# The final sorted array should not be returned by the function, but instead should be stored inside the array arr1. To achieve this, arr1 has a length of m + n , where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. arr2 has a length of n.

# Example 3:
# Input: arr1= [1,2,3,0,0,0], m= 3,arr2=[2,5,6], n = 3
# Output: [1,2,2,3,5,6]
# Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
# The result of the merge is [1,2,2,3,5,6] .
class Solution(object):
 def merge(self, nums1, m, nums2, n):
        last=m+n-1
        while m>0 and n>0:
            if nums1[m-1]>nums2[n-1]:
                nums1[last]=nums1[m-1]
                m-=1
            else:
                nums1[last]=nums2[n-1]
                n-=1
            last-=1
        while n>0:
            nums1[last]=nums2[n-1]
            n-=1
            last-=1
    