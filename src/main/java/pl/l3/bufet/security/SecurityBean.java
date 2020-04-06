package pl.l3.bufet.security;

public class SecurityBean {

    private String message;

    public SecurityBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
