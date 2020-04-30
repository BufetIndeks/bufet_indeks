package pl.l3.bufet.dishCategory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class DishCategoryController {

    DishCategoryService dishCategoryService;

    @Autowired
    public DishCategoryController(DishCategoryService dishCategoryService) {
        this.dishCategoryService = dishCategoryService;
    }

    @GetMapping("/category")
    public List<DishCategory> getCategories(){
        return dishCategoryService.getCategories();
    }

    @PostMapping("/addCategory")
    public ResponseEntity<String> addCategory(@RequestBody DishCategory dishCategory){
        if(dishCategory.getId()!=null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Kategoria nie może mieć ustawionego id");
        return dishCategoryService.addCategory(dishCategory);
    }

    @PostMapping("/updateCategory")
    public ResponseEntity<String> updateCategory(@RequestBody DishCategory dishCategory){
        if(dishCategory.getId()==null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Kategoria nie ma ustawionego id");
        return dishCategoryService.updateCategory(dishCategory);
    }

    @PostMapping("/deleteCategory")
    public ResponseEntity<String> deleteCategory(@RequestBody DishCategory dishCategory){
        if(dishCategory.getId()==null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Kategoria nie ma ustawionego id");
        return dishCategoryService.deleteCategory(dishCategory);
    }

}
