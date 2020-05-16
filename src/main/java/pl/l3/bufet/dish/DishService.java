package pl.l3.bufet.dish;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import pl.l3.bufet.dishCategory.DishCategory;
import pl.l3.bufet.dishCategory.DishCategoryRepository;
import pl.l3.bufet.exceptions.DuplicateDishException;
import pl.l3.bufet.ingredient.Ingredient;
import pl.l3.bufet.ingredient.IngredientRepository;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;

@Service
public class DishService {

    DishRepository dishRepository;
    IngredientRepository ingredientRepository;
    DishCategoryRepository dishCategoryRepository;

    @Autowired
    public DishService(DishRepository dishRepository, IngredientRepository ingredientRepository, DishCategoryRepository dishCategoryRepository) {
        this.dishRepository = dishRepository;
        this.ingredientRepository = ingredientRepository;
        this.dishCategoryRepository = dishCategoryRepository;
    }

    public List<Dish> getAllActiveDishes() {
        return dishRepository.findAllByActiveIsFalse();
    }
    public List<Dish> getAllDishes(){
        return dishRepository.findAll();
    }
    public Dish getDish(Long id){
        Optional<Dish> dish = dishRepository.findDishByIdAndActiveIsFalse(id);
        if(dish.isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Nie znaleziono dania o podanym ID");
        return dish.get();
    }

    public ResponseEntity<String> addDish(Dish dish) {
        Optional<Dish> dishOptional = dishRepository.findByDishName(dish.getDishName());
        if (dishOptional.isEmpty()) {
            checkDish(dish);
            dishRepository.save(dish);
            return ResponseEntity.ok("Dodano danie");
        } else {
            throw new DuplicateDishException();
        }
    }

    public ResponseEntity<String> updateDish(Dish dish) {
        Optional<Dish> dishOptional = dishRepository.findById(dish.getId());
        if (dishOptional.isPresent()) {
            checkDish(dish);
            dishOptional.get().setActive(dish.isActive());
            dishOptional.get().setDishCategoryList(dish.getDishCategoryList());
            dishOptional.get().setIngredientsList(dish.getIngredientsList());
            dishOptional.get().setDishName(dish.getDishName());
            dishOptional.get().setDescription(dish.getDescription());
            dishOptional.get().setDishDay(dish.isDishDay());
            dishOptional.get().setDishImage(dish.getDishImage());
            dishOptional.get().setPrice(dish.getPrice());
            dishRepository.save(dishOptional.get());
            return ResponseEntity.ok("Zmieniono dnie");
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Nie znaleziono takiego dania");
        }
    }

    public List<Dish> getDishesFromCategory(String name){
        Optional <DishCategory> dishCategory = dishCategoryRepository.findByName(name);
        if(dishCategory.isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Brak takiej kategori");
        return dishRepository.findAllByDishCategoryList(dishCategory.get().getId());
    }

    public ResponseEntity<String> setActive(Long id, Boolean active) {
        Optional<Dish> dish = dishRepository.findById(id);
        dish.ifPresentOrElse(value -> {
                    value.setActive(active);
                    dishRepository.save(value);
                },
                () -> {
                    throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Nie znaleziono dania o takim id");
                });
        return ResponseEntity.ok("Zmieniono aktywność dania");
    }


    public void checkDish(Dish dish) {

       if (dish.getDishName().length() > 128 || !Pattern.matches("[\\p{L}\\p{Z}]+", dish.getDishName()))//!dish.getDishName().matches("\\p{Lu}\\p{Ll}*"))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Nazwa dania jest niepoprawna");
        try {
            if(dish.getDishImage()!=null) {
                if (dish.getDishImage().length() / 1024 / 1024 > 16)
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Zdjęcie posiada zbyt duży rozmiar");
            }
        } catch (SQLException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
        if (dish.getPrice() == null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Brak ceny dania");
        if (dish.getDescription().length() > 512)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Opis dania jest zbyt długi");
        if (dish.getDishCategoryList().isEmpty())
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Danie nie posiada przypisanej kategori");
        else if (dish.getIngredientsList().isEmpty())
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Danie nie posiada przypisanych sładników");
        for (Ingredient ingredient : dish.getIngredientsList()) {
            Optional<Ingredient> optionalIngredient = ingredientRepository.findById(ingredient.getId());
            if (optionalIngredient.isEmpty())
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Składnik przypisany do dania nie istnieje w bazie");
        }
        for (DishCategory dishCategory : dish.getDishCategoryList()) {
            Optional<DishCategory> optionalDishCategory = dishCategoryRepository.findById(dishCategory.getId());
            if (optionalDishCategory.isEmpty())
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Kategoria przypisana do dania nie istnieje w bazie");
        }
    }

}
