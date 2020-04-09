package pl.l3.bufet.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins={ "http://localhost:3000", "http://localhost:4200", "http://bufetindeks.duckdns.org:2024" })
@RestController
public class SecurityController {

    @PostMapping(path = "/basicauth")
    public List<String> authenticate(Authentication authentication) {
        List <String> roleList = new ArrayList<>();
        for (GrantedAuthority authority : authentication.getAuthorities()) {
            roleList.add(authority.toString());
        }
        return roleList;

    }

}


