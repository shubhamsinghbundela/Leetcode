package Array;

public class program2 {
    public static void main(String[] args) {
        int skipNumber = 7;
        int arr[] = { 12, 4, 7, 8, 9, 7, 4, 1 };
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == skipNumber) {
                i++;
            } else {
                sum += arr[i];
            }
        }
        System.out.println(sum);
    }
}
