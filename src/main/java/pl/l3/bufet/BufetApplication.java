package pl.l3.bufet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import pl.l3.bufet.user.User;
import pl.l3.bufet.user.UserRole;
import pl.l3.bufet.user.UserRoleRepository;
import pl.l3.bufet.user.UserService;

@SpringBootApplication
public class BufetApplication {


    public static void main(String[] args) {

     SpringApplication.run(BufetApplication.class, args);



    }

}
