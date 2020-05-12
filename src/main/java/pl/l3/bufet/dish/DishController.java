package pl.l3.bufet.dish;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@CrossOrigin(origins={ "http://localhost:3000", "http://localhost:4200", "http://bufetindeks.duckdns.org:2024" })
public class DishController {

    DishService dishService;

    @Autowired
    public DishController(DishService dishService) {
        this.dishService = dishService;
    }

    @GetMapping(path = "/menu", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Dish> getDishesForTable(){
        return dishService.getAllActiveDishes();
    }

    @GetMapping(path = "/admin/menu", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Dish> getAllDishes(){
        return dishService.getAllDishes();
    }

    @PostMapping(path="/admin/addDish")
    public ResponseEntity<String> addDish(@RequestBody Dish dish){
        if(dish.getId()!=null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Zapisywane danie nie może mieć ustawionego id");
        return dishService.addDish(dish);
    }

    @PostMapping(path = "/admin/setActiveDish")
    public ResponseEntity<String> setActive(@RequestBody Dish dish){
        if(dish.getId()==null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Danie nie posiada id");
        return dishService.setActive(dish.getId(),dish.isActive());
    }

    @PostMapping(path = "/admin/updateDish")
    public ResponseEntity<String> updateDish(@RequestBody Dish dish){
        if(dish.getId()==null)
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Danie nie ma id, więc nie istnieje w bazie");
        return dishService.updateDish(dish);
    }

    @GetMapping(path = "/menu/{name}")
    public List<Dish> getDishesFromCategory(@PathVariable(required = true) String name){
        return dishService.getDishesFromCategory(name);
    }

    @GetMapping(path = "/menu/danie={id}")
    public Dish getDishById(@PathVariable(required = true) Long id){
        return dishService.getDish(id);
    }
}
