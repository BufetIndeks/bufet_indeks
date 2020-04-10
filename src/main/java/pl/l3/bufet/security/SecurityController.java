package pl.l3.bufet.security;

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

@CrossOrigin(origins={ "http://localhost:3000", "http://localhost:4200", "http://bufetindeks.duckdns.org:2024" })
@RestController
public class SecurityController {

    @PostMapping(path = "/login")
    public List<String> authenticate(Authentication authentication) {
        List <String> roleList = new ArrayList<>();
        for (GrantedAuthority authority : authentication.getAuthorities()) {
            roleList.add(authority.toString());
        }
        System.out.println(roleList);
        return roleList;

    }

    @GetMapping("/logoutSuccess")
    public ResponseEntity<String> secured() {
        return ResponseEntity.ok("Wylogowanie się powiodło");
    }

}


