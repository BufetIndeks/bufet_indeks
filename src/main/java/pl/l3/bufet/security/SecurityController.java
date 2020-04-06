package pl.l3.bufet.security;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins={ "http://localhost:3000", "http://localhost:4200", "http://bufetindeks.duckdns.org:2024" })
@RestController
public class SecurityController {
    @GetMapping(path = "/basicauth")
    public SecurityBean authenticate() {
        return new SecurityBean("You are authenticated");
    }
}


