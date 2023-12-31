class Solution {
    public int maxSubArray(int[] nums) {
        int sum=nums[0]; int sum1=nums[0];
        for(int i=1;i<nums.length;i++){
            sum=Math.max(sum+nums[i],nums[i]);
            sum1=Math.max(sum,sum1);
        }
        return sum1;
    }
}