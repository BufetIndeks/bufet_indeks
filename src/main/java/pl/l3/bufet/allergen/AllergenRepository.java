package pl.l3.bufet.allergen;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AllergenRepository extends JpaRepository<Allergen, Long> {

     Optional<Allergen> findByAllergenName(String allergenName);
}
