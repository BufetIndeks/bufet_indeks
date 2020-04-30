package pl.l3.bufet.dish;


import org.springframework.data.jpa.repository.JpaRepository;
import pl.l3.bufet.allergen.Allergen;

import java.util.List;
import java.util.Optional;

public interface DishRepository extends JpaRepository<Dish, Long> {

    Optional<Dish> findByDishName(String allergenName);

    List<Dish>findAllByActiveIsTrue();

}
