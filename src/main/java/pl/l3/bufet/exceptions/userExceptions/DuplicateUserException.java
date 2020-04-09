package pl.l3.bufet.exceptions.userExceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.CONFLICT, reason = "Użytkownik o tym loginie już istnieje")
public class DuplicateUserException extends RuntimeException {
}
