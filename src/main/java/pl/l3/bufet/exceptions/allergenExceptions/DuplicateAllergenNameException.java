package pl.l3.bufet.exceptions.allergenExceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.CONFLICT, reason = "Alergen o takiej nazwie już istnieje")
public class DuplicateAllergenNameException extends RuntimeException {
}
