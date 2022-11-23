class Solution {
    public int findNumbers(int[] nums) {
        int sum=0,count=0;
        int[] arr=new int[nums.length];
        for(int i=0;i<nums.length;i++){
            arr[i]=countDigit(nums[i]);
        }
        for(int i:arr){
            if(isEven(i)){
                sum++;
            }
        }
        return sum;
    }
    public int countDigit(int n){
        int count=0;
        while(n!=0){
            n/=10;
            count++;
        }
        return count;
    }
    public boolean isEven(int n){
        if(n%2==0){
            return true;
        }else{
            return false;
        }
        
    }
}
