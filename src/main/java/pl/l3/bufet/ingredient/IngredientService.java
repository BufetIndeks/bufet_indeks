package pl.l3.bufet.ingredient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import pl.l3.bufet.allergen.Allergen;
import pl.l3.bufet.allergen.AllergenRepository;
import pl.l3.bufet.exceptions.ingredient.DuplicateIngredientException;

import java.util.List;
import java.util.Optional;

@Service
public class IngredientService {
    private IngredientRepository ingredientRepository;
    private AllergenRepository allergenRepository;

    @Autowired
    public IngredientService(IngredientRepository ingredientRepository, AllergenRepository allergenRepository) {
        this.ingredientRepository = ingredientRepository;
        this.allergenRepository = allergenRepository;
    }

    public List<Ingredient> getIngredients(){
        return ingredientRepository.findAll();
    }

    public ResponseEntity<String> addIngredient(Ingredient ingredient){

        Optional<Ingredient> optionalIngredient = ingredientRepository.findByIngredientName(ingredient.getIngredientName());
        if(optionalIngredient.isEmpty()){
            checkIngredient(ingredient);
            ingredientRepository.save(ingredient);
            return ResponseEntity.ok("Dodano składnik");
        }
        else throw new DuplicateIngredientException();

    }

    public ResponseEntity<String> updateIngredient(Ingredient ingredient){
        Optional<Ingredient> optionalIngredient = ingredientRepository.findById(ingredient.getId());
        if(optionalIngredient.isPresent()){
            checkIngredient(ingredient);
            optionalIngredient.get().setAllergenList(ingredient.getAllergenList());
            optionalIngredient.get().setIngredientName(ingredient.getIngredientName());
            ingredientRepository.save(optionalIngredient.get());
            return ResponseEntity.ok("Zaktualizowano składnik");
        }else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Nie znaleziono takiego składnika");
    }

    public ResponseEntity<String> deleteIngredient(Ingredient ingredient){
        Optional<Ingredient> optionalIngredient = ingredientRepository.findById(ingredient.getId());
        if(optionalIngredient.isPresent()){
            ingredientRepository.delete(optionalIngredient.get());
            return ResponseEntity.ok("Usunięto składnik");
        }
        else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Nie znaleziono takiego składnika");
    }

    private void checkIngredient(Ingredient ingredient){
        if(ingredient.getIngredientName().length()>64 || !ingredient.getIngredientName().matches("[\\p{L}\\p{Z}]+"))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Nazwa składnika ma powyżej 64 znaków, lub jest niepoprawna");

        for (int i = 0; i < ingredient.getAllergenList().size(); i++) {
            Optional<Allergen> allergenOptional = allergenRepository.findByAllergenName(ingredient.getAllergenList().get(i).getAllergenName());
            if(allergenOptional.isEmpty())
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Alergen przypisany do składnika nie istnieje w bazie");
            else{
                ingredient.getAllergenList().get(i).setId(allergenOptional.get().getId());
            }
        }
    }

}
