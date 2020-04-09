package pl.l3.bufet;

import org.aspectj.weaver.ast.Or;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.ConfigurableApplicationContext;
import pl.l3.bufet.order.Order;
import pl.l3.bufet.order.OrderService;
import pl.l3.bufet.user.User;
import pl.l3.bufet.user.UserService;


@SpringBootApplication
public class BufetApplication {


    public static void main(String[] args) {
     SpringApplication.run(BufetApplication.class, args);

    }
}
