package Array;

public class program3 {
    public static void main(String[] args) {
        int[] pal = { 8, 5, 3, 4, 3, 5, 8 };
        int left = 0;
        int right = pal.length - 1;
        boolean flag = true;
        while (left < right) {
            if (pal[left] == pal[right]) {
                left++;
                right--;
            } else {
                flag = false;
                break;
            }
        }
        if (flag == true) {
            System.out.println("palindrome");
        } else {
            System.out.println("not palindrome");
        }
    }
}
