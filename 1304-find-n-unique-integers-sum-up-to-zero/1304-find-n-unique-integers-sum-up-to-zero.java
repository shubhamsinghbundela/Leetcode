class Solution {
    public int[] sumZero(int n) {
        int[] num = new int[n];
        for(int i=0;i<n;i++){
            num[i]=(i*2)-n+1;
        }
        return num;
    }
}