public class Node {
    public String username;
    public String password;
    public Node next;

    public Node() {
        this.username = null;
        this.password = null;
        this.next = null;
    }

    public Node(String username, String password, Node next) {
        this.username = username;
        this.password = password;
        this.next = next;
    }

    // getters
    public String getName() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public Node getNext() {
        return next;
    }

    public void add(String name, String pass) {

    }
}