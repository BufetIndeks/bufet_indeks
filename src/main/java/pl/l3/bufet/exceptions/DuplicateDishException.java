package pl.l3.bufet.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.CONFLICT, reason = "Takie danie już istnieje")
public class DuplicateDishException extends RuntimeException {
}