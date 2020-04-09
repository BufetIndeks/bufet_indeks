package pl.l3.bufet.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import pl.l3.bufet.exceptions.userExceptions.DuplicateUserException;
import pl.l3.bufet.exceptions.userExceptions.NoRoleFoundException;

import java.io.IOException;
import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.Optional;

@Service
public class UserService {

    private UserRepository userRepository;
    private UserRoleRepository userRoleRepository;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, UserRoleRepository userRoleRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.userRoleRepository = userRoleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void addUserWithRole(User user) throws DataAccessException {
        if(user.getRoles().size()==0)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Brak podanej roli użytkownika");
        Optional<UserRole> userRole = userRoleRepository.findByRole(user.getRoles().iterator().next().getRole());
        Optional<User> testUser = userRepository.findByLogin(user.getLogin());
        if(userRole.isEmpty())
            throw new NoRoleFoundException();
        else if(user.getLogin()==null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Brak loginu");
        else if(user.getPassword()==null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Brak hasła");
        else if(user.getId()!=null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Użytkownik nie może mieć ustawionego ID");
        else if(testUser.isPresent()){
            throw new DuplicateUserException();
        }

        user.getRoles().clear();
        user.getRoles().add(userRole.get());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);

    }

    //Do smieci
    public User findUserByLogin(String login){
      return userRepository.findByLogin(login).get();
    }

    //Do smieci
    public UserRole getRole(){
        return userRoleRepository.findByRole("ROLE_ADMIN").get();
    }



}
