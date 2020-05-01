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

    public ResponseEntity<String> addAllergen(Allergen allergen) {
        Optional<Allergen> inBaseAllergen = allergenRepository.findByAllergenName(allergen.getAllergenName());
        inBaseAllergen.ifPresent(a -> {
            throw new DuplicateAllergenNameException();
        });
        checkAllergen(allergen);
        allergenRepository.save(allergen);
        return ResponseEntity.ok("Dodano alergen");
    }
    public List<Allergen> findAllAllergens(){
        return allergenRepository.findAll();
    }

    public ResponseEntity<String> updateAllergen(Allergen allergen){
        Optional<Allergen> inBaseAllergen =  allergenRepository.findById(allergen.getId());
        if(inBaseAllergen.isPresent()){
            checkAllergen(allergen);
            inBaseAllergen.get().setAllergenName(allergen.getAllergenName());
            allergenRepository.save(inBaseAllergen.get());
            return ResponseEntity.ok("Zmieniono alergen");
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Nie znaleziono takiego alergneu");
        }
    }

    public ResponseEntity<String> deleteAllergenByName(String allergenName) {
        Optional<Allergen> allergen = allergenRepository.findByAllergenName(allergenName);
        if(allergen.isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Taki alergen nie istnieje w bazie danych");
        allergenRepository.delete(allergen.get());
        return ResponseEntity.ok("Usunięto alergen");
    }


    private void checkAllergen(Allergen allergen){
        if(allergen.getAllergenName()==null || allergen.getAllergenName().length()>32)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Allergen musi mieć ustawioną nazwe, krótszą niż 32 znaki");
        else if(!allergen.getAllergenName().matches("[\\p{L}\\p{Z}]+"))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Nazwa alergenu jest niepoprawna");
    }
}
