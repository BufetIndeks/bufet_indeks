package pl.l3.bufet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pl.l3.bufet.user.User;
import pl.l3.bufet.user.UserRole;
import pl.l3.bufet.user.UserService;

import java.io.IOException;
import java.sql.SQLIntegrityConstraintViolationException;

@CrossOrigin(origins={ "http://localhost:3000", "http://localhost:4200", "http://bufetindeks.duckdns.org:2024" })
@RestController
public class HomeController {

    private UserService userService;

    @Autowired
    public HomeController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/getadmin")
    public String home() throws DataAccessException {
        //Tworze sobie admina na starcie

            User user = new User();
            user.setLogin("admin");
            user.setPassword("admin");
            UserRole userRole = userService.getRole();
            user.getRoles().add(userRole);
            userService.addUserWithRole(user);

        return "nothing";
    }




}