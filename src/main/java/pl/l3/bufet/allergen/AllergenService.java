package pl.l3.bufet.allergen;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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


}
