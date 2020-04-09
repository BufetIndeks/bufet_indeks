package pl.l3.bufet.exceptions.userExceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.NOT_FOUND, reason = "Taka rola użytkownika nie jest zdefiniowana")
public class NoRoleFoundException extends RuntimeException {
}
