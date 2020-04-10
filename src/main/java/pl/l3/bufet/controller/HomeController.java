package pl.l3.bufet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import pl.l3.bufet.user.User;
import pl.l3.bufet.user.UserRole;
import pl.l3.bufet.user.UserService;

import java.io.IOException;
import java.sql.SQLIntegrityConstraintViolationException;

@CrossOrigin(origins={ "http://localhost:3000", "http://localhost:4200", "http://bufetindeks.duckdns.org:2024" })
@Controller
public class HomeController {

    private UserService userService;

    @Autowired
    public HomeController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/")
    public String home() throws DataAccessException {
        //Tworze sobie admina na starcie
        //if(userService.findUserByLogin("admin")==null){
            User user = new User();
            user.setLogin("admin");
            user.setPassword("admin");
            UserRole userRole = userService.getRole();
            user.getRoles().add(userRole);
            userService.addUserWithRole(user);
       // }
        return "index";
    }

    @RequestMapping("/secured")
    @ResponseBody
    public String secured() {
        return "secured page";
    }

}