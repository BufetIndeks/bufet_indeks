package pl.l3.bufet.dish;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.l3.bufet.allergen.Allergen;

import java.util.List;
import java.util.Optional;

public interface DishRepository extends JpaRepository<Dish, Long> {

    Optional<Dish> findByDishName(String allergenName);

    List<Dish>findAllByActiveIsTrue();

    @Query("SELECT d.* FROM danie d INNER JOIN danie_kategoria dk ON d.danie_id = dk.danie_id WHERE dk.kategoria_dania_id=(:id)")
    List<Dish>findAllByDishCategoryList(@Param("id") Long id);

}
