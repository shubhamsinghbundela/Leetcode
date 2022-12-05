class Solution {
    public boolean halvesAreAlike(String s) {
        char[] ch=s.toCharArray();
        StringBuffer a=new StringBuffer(s);
        StringBuffer b=new StringBuffer(s);
        for(int i=0;i<ch.length/2;i++){
            a.append(ch[i]);
        }
        for(int i=ch.length/2;i<ch.length;i++){
            b.append(ch[i]);
        }
        int aCount=0;
        int bCount=0;
        for(int i=0;i<a.length();i++){
            if(a.charAt(i)=='a' ||a.charAt(i)=='e'||a.charAt(i)=='i' ||a.charAt(i)=='o' ||a.charAt(i)=='u' ||a.charAt(i)=='A' ||a.charAt(i)=='E' ||a.charAt(i)=='I' ||a.charAt(i)=='O' ||a.charAt(i)=='U'){
                aCount++;
            }
        }
        for(int i=0;i<b.length();i++){
            if(b.charAt(i)=='a' ||b.charAt(i)=='e'||b.charAt(i)=='i' ||b.charAt(i)=='o' ||b.charAt(i)=='u' ||b.charAt(i)=='A' ||b.charAt(i)=='E' ||b.charAt(i)=='I' ||b.charAt(i)=='O' ||b.charAt(i)=='U'){
                bCount++;
            }
        }
        if(aCount==bCount)
            return true;
        else
            return false;
    }
}