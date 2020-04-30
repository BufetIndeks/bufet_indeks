package pl.l3.bufet.exceptions.ingredient;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.CONFLICT, reason = "Taki składnik już istnieje")
public class DuplicateIngredientException extends RuntimeException {
}