class Solution {
    public String freqAlphabets(String s) {
        StringBuilder s1 = new StringBuilder();
        for(int i=s.length()-1;i>=0;i--){
            if(s.charAt(i)=='#'){
                s1.append((char)('a'+(s.charAt(i-1)-'0') + 10*(s.charAt(i-2)-'0')-1));
                i-=2;
            }else{
                s1.append((char)('a' + (s.charAt(i)-'0')-1));
                 // output.append((char)('a' + (s.charAt(i) - '0') -1));
            }
        }
        s1.reverse();
        return s1.toString();
    }
}