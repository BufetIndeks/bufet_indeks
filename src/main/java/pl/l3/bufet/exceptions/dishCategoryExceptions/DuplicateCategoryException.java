package pl.l3.bufet.exceptions.dishCategoryExceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.CONFLICT, reason = "Taka kategoria już istnieje")
public class DuplicateCategoryException extends RuntimeException {
}