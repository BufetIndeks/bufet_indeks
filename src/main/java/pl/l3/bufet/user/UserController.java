package pl.l3.bufet.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins={ "http://localhost:3000", "http://localhost:4200" })
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

    @PostMapping("/register")
    public String addUser(@ModelAttribute @Valid User user,
                          BindingResult bindingResult,
                          @RequestParam(value="role") String role){
        if(bindingResult.hasErrors())
            return "registerForm";
        else {
            userService.addUserWithRole(user,role);
            return "registerSuccess";
        }

    }
}
