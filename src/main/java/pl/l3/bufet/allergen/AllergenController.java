package pl.l3.bufet.allergen;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins={ "http://localhost:3000", "http://localhost:4200", "http://bufetindeks.duckdns.org:2024" })
public class AllergenController {

    AllergenService allergenService;

    @Autowired
    public AllergenController(AllergenService allergenService) {
        this.allergenService = allergenService;
    }

    @GetMapping("/allergen")
    public List<Allergen> findAllAllergens() {
        return allergenService.findAllAllergens();
    }

    @PostMapping("/addAllergen")
    public ResponseEntity<String> addAllergen(@RequestBody Allergen allergen) {
        if (allergen.getId() != null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Zapisywany alergen nie może mieć ustawionego id");
        return allergenService.addAllergen(allergen);
    }

    @PostMapping(path="/deleteAllergen",consumes=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> removeAllergen(@RequestBody Allergen allergen) {
        return allergenService.deleteAllergenByName(allergen.getAllergenName());
    }

    @PostMapping(path = "/updateAllergen")
    public ResponseEntity<String> updateAllergen(@RequestBody Allergen allergen){
        if(allergen.getId()==null)
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Taki alergen nie istnieje");
        return allergenService.updateAllergen(allergen);
    }

}
