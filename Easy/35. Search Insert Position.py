# Input:
#     5
#     1 3 4 5 10
#     2
# Output:
#     1
# Explanation:
#     Since 2 is missing from the given array, it would be inserted at index 1.

# Input:
#     5
#     1 3 8 9 11
#     9
# Output:
#     3
# Explanation:
#     The key 9 was found at index 3.

def solve(n, arr, key):
  start=0
  end=n-1
  while(start<=end):
    i=(start+end)//2
    mid=arr[i]
    if(key>mid):
      start=i+1
    elif(key<mid):
      end=i-1
    else:
      return i
  return start
ans=solve(5,[1,3,8,9,11],9)
ans1=solve(5,[1,3,4,5,10],2)
print(ans)
print(ans1)