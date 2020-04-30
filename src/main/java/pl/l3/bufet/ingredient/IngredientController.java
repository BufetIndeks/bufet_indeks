package pl.l3.bufet.ingredient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class IngredientController {

    private IngredientService ingredientService;

    @Autowired
    public IngredientController(IngredientService ingredientService) {
        this.ingredientService = ingredientService;
    }

    @GetMapping("/ingredient")
    public List<Ingredient> getIngredients(){
        return ingredientService.getIngredients();
    }

    @PostMapping("/addIngredient")
    public ResponseEntity<String> addIngredient(@RequestBody Ingredient ingredient){
        if(ingredient.getId()!=null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Składnik nie może mieć ustawionego id");
        return ingredientService.addIngredient(ingredient);
    }

    @PostMapping("/updateIngredient")
    public ResponseEntity<String> updateIngredient(@RequestBody Ingredient ingredient){
        if(ingredient.getId()==null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Skladnik musi posiadać id");
        return ingredientService.updateIngredient(ingredient);
    }

    @PostMapping("/deleteIngredient")
    public ResponseEntity<String> deleteIngredient(@RequestBody Ingredient ingredient){
        if(ingredient.getId()==null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Skladnik musi posiadać id");
        return ingredientService.deleteIngredient(ingredient);
    }




}
