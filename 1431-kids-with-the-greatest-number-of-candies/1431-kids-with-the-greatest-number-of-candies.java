class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        // ArrayList list = new ArrayList();  
        ArrayList<Boolean> list = new ArrayList<Boolean>();
        int max = candies[0];
        int[] candies1=new int[candies.length];
        for(int i=1;i<candies.length;i++){
            if(candies[i]>max){
                max=candies[i];
            }
        }
        
        for(int i=0;i<candies.length;i++){
            candies1[i]=candies[i]+extraCandies;
        }
        for(int i=0;i<candies.length;i++){
            if(candies1[i]>=max){
                list.add(true);
                continue;
            }else{
                list.add(false);
                continue;
            }
            
        }
        return list;
    }
}