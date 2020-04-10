package pl.l3.bufet.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    public static final String ADMIN = "ROLE_ADMIN";
    public static final String TABLE = "ROLE_TABLE";
    public static final String WORKER = "ROLE_WORKER";

    /*public class CustomLogoutSuccessHandler implements LogoutSuccessHandler {
        public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
                throws IOException, ServletException {
            super.onLogoutSuccess(request, response, authentication);
            // handle success here
        }
    }*/

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http    .cors().and().httpBasic().and()
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/admin").hasRole("ADMIN")
                .antMatchers("/admin/register").hasRole("ADMIN")
                .antMatchers("/**").permitAll()
                .and().logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout")).clearAuthentication(true)
                .invalidateHttpSession(true)
                //.logoutSuccessHandler(new CustomLogoutSuccessHandler())
                .deleteCookies("JSESSIONID");
    }


    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }


}
