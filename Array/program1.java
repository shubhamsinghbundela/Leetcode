package Array;

public class program1 {
    public static void main(String[] args) {
        int[] arr = { 3, 7, 1, 4, 5, 6, 7, 10 };
        int n = arr.length;
        int sp = 1;
        int cel = 6;
        boolean flag = true;
        int sum = 0;
        for (int i = 0; i < n; i++) {
            if (sp == arr[i]) {
                flag = false;
            } else if (flag == true) {
                sum = sum + arr[i];
            } else if (cel == arr[i]) {
                flag = true;
            }
        }
        System.out.println(sum);
    }
}
