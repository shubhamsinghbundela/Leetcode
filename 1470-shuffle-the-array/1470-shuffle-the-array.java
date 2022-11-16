class Solution {
    public int[] shuffle(int[] nums, int n) {
        int[] arr1= new int[nums.length];
        int k=0,i=0,j=1;
        while(k<n){
            arr1[i]=nums[k];
            arr1[j]=nums[k+n];
            i+=2;
            j+=2;
            k++;
        }
        return arr1;
    }
}