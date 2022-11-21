class Solution {
    public boolean checkIfPangram(String sentence) {
        for(char i='a';i<='z';i++){
            if(!sentence.contains(""+i)){
                return false;
            }
        }
        return true;
    }
}