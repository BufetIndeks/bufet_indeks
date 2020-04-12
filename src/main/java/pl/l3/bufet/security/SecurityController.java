package pl.l3.bufet.security;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200", "http://bufetindeks.duckdns.org:2024"})
@Controller
public class SecurityController {


    @PostMapping(path = "/login")
    public void login(){}

    @GetMapping(path="/loginsuccess")
    @ResponseBody
    public ResponseEntity<String> loginSuccess(){
        return ResponseEntity.ok("Pomyślnie zalogowano");
    }

    @GetMapping("/logoutSuccess")
    public ResponseEntity<String> secured() {
        return ResponseEntity.ok("Wylogowanie się powiodło");
    }

    @GetMapping(path = "/logout")
    public void logout(){}

    @GetMapping(path = "/logged_in", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Authentication isLoggedIn(Authentication authentication){
        return authentication;
    }

}


