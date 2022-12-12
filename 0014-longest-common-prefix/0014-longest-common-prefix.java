class Solution {
    public String longestCommonPrefix(String[] strs) {
        String res="";
        String commonPrefix="";
        int min =  Integer.MAX_VALUE;
        for(int i=0;i<strs.length;i++){
            if(min>strs[i].length()){
                res=strs[i];
                min=strs[i].length();
            }
        }
        for(int i=0;i<res.length();i++){
            boolean flag= true;
            for(String str:strs){
                if(str.charAt(i)!=res.charAt(i)){
                    flag=false;
                    break;
                }
            }
            if(flag){
                commonPrefix+=res.charAt(i);
            }else{
                return commonPrefix;
            }
        }
        return commonPrefix;
    }
}