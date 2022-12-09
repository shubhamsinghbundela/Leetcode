class Solution {
    public List<Integer> luckyNumbers (int[][] matrix) {
        List<Integer> result = new ArrayList<Integer>();
        for(int row=0;row<matrix.length;row++){
            int minCol=min(matrix,row);
            int value=matrix[row][minCol];
            if(checkIfMaxInCol(matrix,minCol,value)){
                result.add(value);
            }
        }
        return result;
        
    }
    private int min(int[][] matrix,int row){
        int minIndex=0, min=matrix[row][minIndex];
        for(int i=1;i<matrix[row].length;i++){
            if(matrix[row][i]<min){
                min=matrix[row][i];
                minIndex=i;
            }
        }
        return minIndex;
    }
    private boolean checkIfMaxInCol(int[][] matrix, int col, int value){
        for(int row=0;row<matrix.length;row++){
            if(matrix[row][col]>value){
                return false;
            }
        }
        return true;
    }
}