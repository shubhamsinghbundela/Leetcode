class Solution {
    public static int[][] matrixReshape(int[][] mat, int r, int c) {
	    int m=mat.length, n=mat[0].length;
        if(r*c!=n*m){
            return mat;
        }
        int[][] mat1= new int[r][c];
        for(int i=0;i<r*c;i++){
            mat1[i/c][i%c]=mat[i/n][i%n];
        }
        return mat1;
	}
}