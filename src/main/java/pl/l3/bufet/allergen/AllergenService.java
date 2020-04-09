package pl.l3.bufet.allergen;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import pl.l3.bufet.exceptions.allergenExceptions.DuplicateAllergenNameException;

import java.util.List;
import java.util.Optional;

@Service
public class AllergenService {

    private AllergenRepository allergenRepository;

    @Autowired
    public AllergenService(AllergenRepository allergenRepository) {
        this.allergenRepository = allergenRepository;
    }

    public void addAllergen(Allergen allergen) {
        Optional<Allergen> inBaseAllergen = allergenRepository.findByAllergenName(allergen.getAllergenName());
        inBaseAllergen.ifPresent(a -> {
            throw new DuplicateAllergenNameException();
        });
        allergenRepository.save(allergen);
    }
    public List<Allergen> findAllAllergens(){
        return allergenRepository.findAll();
    }
    public Optional<Allergen> findByAllergenName(String allergenName) { return allergenRepository.findByAllergenName(allergenName); }
    public ResponseEntity<String> deleteAllergenByName(String allergenName) {
        Optional<Allergen> allergen = allergenRepository.findByAllergenName(allergenName);
        if(allergen.isEmpty())
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Nieprawidłwowa nazwa alergenu");
        allergenRepository.delete(allergen.get());
        return ResponseEntity.ok("Usunięto");
    }

}
