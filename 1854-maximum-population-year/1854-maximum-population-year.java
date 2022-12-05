class Solution {
    public int maximumPopulation(int[][] logs) {
        int[] nums = new int[101];
        for(int i=0;i<logs.length;i++){
            for(int j=logs[i][0];j<logs[i][1];j++){
                nums[j-1950]++;
            }
        }
        int maxVal=0;
        int maxYear=1950;
        for(int i=0;i<101;i++){
            if(maxVal<nums[i]){
                maxVal=nums[i];
                maxYear=i+1950;
            }
        }
        return maxYear;
    }
}