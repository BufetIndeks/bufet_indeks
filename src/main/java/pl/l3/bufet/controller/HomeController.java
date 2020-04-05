package pl.l3.bufet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import pl.l3.bufet.user.User;
import pl.l3.bufet.user.UserService;

@Controller
public class HomeController {

    private UserService userService;

    @Autowired
    public HomeController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/")
    public String home() {
        //Tworze sobie admina na starcie
        userService.addUserWithRole(new User("admin","admin"),"ROLE_ADMIN");
        return "index";
    }

    @RequestMapping("/secured")
    @ResponseBody
    public String secured() {
        return "secured page";
    }

}