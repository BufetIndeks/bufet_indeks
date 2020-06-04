package pl.l3.bufet.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import pl.l3.bufet.security.handlers.CustomAuthenticationFailureHandler;
import pl.l3.bufet.security.handlers.CustomLogoutSuccessHandler;
import pl.l3.bufet.user.CustomUserDetailsService;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    public static final String ADMIN = "ROLE_ADMIN";
    public static final String WORKER = "ROLE_WORKER";
    public static final String TABLE = "ROLE_TABLE";
    @Autowired
    CustomUserDetailsService customUserDetailsService;

    @Override
    protected void configure(final HttpSecurity http) throws Exception {
        http.cors().and()
                .csrf().disable()
                .authorizeRequests()

                .antMatchers("/admin/**").hasAuthority(ADMIN)
                .antMatchers("/admin/ingredient").authenticated()
                .antMatchers("/getOrder/**").authenticated()
                .antMatchers("/getOrders").authenticated()
                .antMatchers("/addOrder").authenticated()
                .antMatchers("/worker/changeStatus/**").hasAuthority(WORKER)
                .antMatchers("/logout").authenticated()
                .antMatchers("/adminLogged").hasAuthority(ADMIN)
                .antMatchers("/tableLogged").hasAuthority(TABLE)
                .antMatchers("/workerLogged").hasAuthority(WORKER)
                .antMatchers("/takeRole").authenticated()
                .anyRequest().permitAll()

                .and()
                .formLogin()
                .loginProcessingUrl("/login").defaultSuccessUrl("/loginsuccess")
                .failureHandler(customAuthenticationFailureHandler())

                .and()
                .logout().logoutUrl("/logout").deleteCookies("JSESSIONID")
                .logoutSuccessHandler(customLogoutSuccessHandler())

                .and()
                .rememberMe()
                .key("uniqueAndSecret").tokenValiditySeconds(280000)
                .userDetailsService(customUserDetailsService);

        ;
    }


    @Bean
    public CorsFilter corsFilter() {

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true); // you USUALLY want this
        // likely you should limit this to specific origins
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("GET");
        config.addAllowedMethod("POST");
        config.addAllowedMethod("PUT");
        config.addAllowedMethod("DELETE");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

    @Bean
    public AuthenticationFailureHandler customAuthenticationFailureHandler() {
        return new CustomAuthenticationFailureHandler();
    }

    @Bean
    public CustomLogoutSuccessHandler customLogoutSuccessHandler() {
        return new CustomLogoutSuccessHandler();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}