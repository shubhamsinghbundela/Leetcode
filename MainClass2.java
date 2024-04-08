
class Demo4 {
    int a = 10;
    int b = 20;
}

/**
 * MainClass2
 */
class MainClass2 {
    public static void main(String[] args) {
        System.out.println("main method started");
        System.out.println("a value is " + new Demo4().a);
        System.out.println("b value is " + new Demo4().b);
        System.out.println("modify a and b");
        Demo1.a = 100;
        Demo1.b = 200;
        System.out.println("a value is " + new Demo4().a);
        System.out.println("b value is " + new Demo4().b);
        System.out.println("main method ended");
    }
}