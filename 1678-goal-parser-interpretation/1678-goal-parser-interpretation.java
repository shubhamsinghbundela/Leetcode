class Solution {
    public String interpret(String command) {
        StringBuilder s = new StringBuilder(command.length());
        for(int i=0; i<command.length();i++){
            if(command.charAt(i)=='G'){
                s.append("G");
            }else if(command.charAt(i)=='('){
                if(command.charAt(i+1)==')'){
                    s.append("o");
                }else if(command.charAt(i+1)=='a'){
                    s.append("al");
                }
            }
        }
        return s.toString();
    }
}