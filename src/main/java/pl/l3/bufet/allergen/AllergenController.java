package pl.l3.bufet.allergen;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/admin/allergens")
@CrossOrigin(origins={ "http://localhost:3000", "http://localhost:4200", "http://bufetindeks.duckdns.org:2024" })
public class AllergenController {

    AllergenService allergenService;

    @Autowired
    public AllergenController(AllergenService allergenService) {
        this.allergenService = allergenService;
    }

    @GetMapping("")
    public List<Allergen> findAllAllergens() {
        return allergenService.findAllAllergens();
    }

    @PostMapping("")
    public ResponseEntity<String> addAllergen(@RequestBody Allergen allergen) {
        if (allergen.getId() != null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Zapisywany alergen nie może mieć ustawionego id");
        else if(allergen.getAllergenName()==null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Allergen musi mieć ustawioną nazwe");
        allergenService.addAllergen(allergen);
        return ResponseEntity.ok("Dodano alergen");
    }

    @GetMapping(path="/delete/{id}",consumes=MediaType.APPLICATION_JSON_VALUE) //@RequestParam(required=false,name="allergenName") String allergenName
    public ResponseEntity<String> removeAllergen(@PathVariable int id) {
       // LoggerFactory.getLogger(AllergenController.class).info(allergenName);
        System.out.println(id);
       // return allergenService.deleteAllergenByName(allergenName);
        return ResponseEntity.ok("a");
    }
}
