package pl.l3.bufet.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

@CrossOrigin(origins={ "http://localhost:3000", "http://localhost:4200", "http://bufetindeks.duckdns.org:2024" })
@Controller
@RequestMapping("/admin")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/register")
    public String register(Model model){
        model.addAttribute("user",new User());
        return "registerForm";
    }

    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String addUser(@RequestBody Map<String, String> user){
        userService.addUserWithRole(new User(user.get("login"), user.get("password")), user.get("role"));
        return "registerSuccess";
    }
}
