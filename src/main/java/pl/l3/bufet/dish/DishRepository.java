package pl.l3.bufet.dish;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.l3.bufet.allergen.Allergen;

import java.util.List;
import java.util.Optional;

public interface DishRepository extends JpaRepository<Dish, Long> {

    Optional<Dish> findByDishName(String allergenName);

    List<Dish>findAllByActiveIsFalse();

    @Query("SELECT d FROM Dish d INNER join d.dishCategoryList dcl WHERE dcl.id = (:id)")
    List<Dish>findAllByDishCategoryList(@Param("id") Long id);

    Optional<Dish> findDishByIdAndActiveIsFalse(Long id);

}
