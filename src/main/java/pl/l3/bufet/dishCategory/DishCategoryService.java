package pl.l3.bufet.dishCategory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import pl.l3.bufet.exceptions.dishCategoryExceptions.DuplicateCategoryException;

import java.util.List;
import java.util.Optional;

@Service
public class DishCategoryService {

    DishCategoryRepository dishCategoryRepository;

    @Autowired
    public DishCategoryService(DishCategoryRepository dishCategoryRepository) {
        this.dishCategoryRepository = dishCategoryRepository;
    }

    public List<DishCategory> getCategories() {
        return dishCategoryRepository.findAll();
    }

    public ResponseEntity<String> addCategory(DishCategory dishCategory) {
        Optional<DishCategory> dishCategoryOptional = dishCategoryRepository.findByName(dishCategory.getName());
        if (dishCategoryOptional.isEmpty()) {
            checkCategory(dishCategory);
            dishCategoryRepository.save(dishCategory);
            return ResponseEntity.ok("Dodano kategorie");
        } else {
            throw new DuplicateCategoryException();
        }
    }

    public ResponseEntity<String> updateCategory(DishCategory dishCategory) {
        Optional<DishCategory> dishCategoryOptional = dishCategoryRepository.findById(dishCategory.getId());
        if (dishCategoryOptional.isPresent()) {
            checkCategory(dishCategory);
            dishCategoryOptional.get().setName(dishCategory.getName());
            dishCategoryRepository.save(dishCategory);
            return ResponseEntity.ok("Zmieniono kategorie");
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Taka kategoria nie istnieje");
        }
    }

    public ResponseEntity<String> deleteCategory(DishCategory dishCategory){
        Optional<DishCategory> optionalDishCategory = dishCategoryRepository.findById(dishCategory.getId());
        if(optionalDishCategory.isPresent()){
            dishCategoryRepository.delete(optionalDishCategory.get());
            return ResponseEntity.ok("Kategoria została usunięta");
        }
        else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Nie znaleziono takiej kategori");
    }


    private void checkCategory(DishCategory dishCategory) {
        if (dishCategory.getName() == null || dishCategory.getName().length() > 128)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Allergen musi mieć ustawioną nazwe, krótszą niż 32 znaki");
        else if (!dishCategory.getName().matches("[\\p{L}\\p{Z}]+"))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Nazwa alergenu jest niepoprawna");
    }
}
