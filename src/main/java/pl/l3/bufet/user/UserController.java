package pl.l3.bufet.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;



@CrossOrigin(origins={ "http://localhost:3000", "http://localhost:4200", "http://bufetindeks.duckdns.org:2024" })
@RestController
@RequestMapping("/admin")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> addUser(@RequestBody User user){
         if(!user.getOrders().isEmpty())
             throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                     "Użytkownik nie może mieć przypisanych zamówień przy rejestracji");
         userService.addUserWithRole(user);
         return ResponseEntity.status(HttpStatus.CREATED).body("Dodano użytkownika");
    }
}
