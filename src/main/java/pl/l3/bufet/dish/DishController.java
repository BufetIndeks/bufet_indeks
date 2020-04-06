package pl.l3.bufet.dish;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController()
@RequestMapping("/menu")
@CrossOrigin(origins={  "http://bufetindeks.duckdns.org:2024" })
public class DishController {

    DishService dishService;

    @Autowired
    public DishController(DishService dishService) {
        this.dishService = dishService;
    }

    @GetMapping(path = "/dishes", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Dish> getDishes(){
        return dishService.getAllDishes();
    }

}
