class Demo1 {
    static int a = 10;
    static int b = 20;
}

class MainClass1 {
    public static void main(String[] args) {
        System.out.println("main method started");
        System.out.println("a value is " + Demo1.a);
        System.out.println("b value is " + Demo1.b);
        System.out.println("modify a and b");
        Demo1.a = 100;
        Demo1.b = 200;
        System.out.println("a value is " + Demo1.a);
        System.out.println("b value is " + Demo1.b);
        System.out.println("main method ended");
    }
}