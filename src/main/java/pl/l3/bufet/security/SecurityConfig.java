package pl.l3.bufet.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    public static final String ADMIN = "ROLE_ADMIN";
    public static final String TABLE = "ROLE_TABLE";
    public static final String WORKER = "ROLE_WORKER";
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http
                .cors().and()
                .logout().and()
                .csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.POST,"/admin/register", "/admin/**").hasAuthority(ADMIN)
                .anyRequest().permitAll()
                .and().httpBasic();





    }



    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }


}
