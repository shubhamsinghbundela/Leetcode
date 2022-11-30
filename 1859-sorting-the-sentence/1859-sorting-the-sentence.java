class Solution {
    public String sortSentence(String s) {
        String[] words = s.split(" ");
        String[] ch = new String[words.length];
        for(int i=0;i<words.length;i++){
            int index=words[i].charAt(words[i].length()-1)-'0';
            ch[index-1]=words[i].substring(0,words[i].length()-1);
        }
        return String.join(" ",ch);
    }
}