class Solution {
    public boolean validPalindrome(String s) {
        int left=0;
        int right=s.length()-1;
        while(left<right){
            if(s.charAt(left)!=s.charAt(right)){
                return remove(s,left+1,right) || remove(s,left,right-1);
            }
            left++;
            right--;
        }
        return true;
    }
    private boolean remove(String str,int l, int r){
        while(l<r){
            if(str.charAt(l)!=str.charAt(r)){
                return false;
            }
            l++;
            r--;
        }
        return true;
    } 
}