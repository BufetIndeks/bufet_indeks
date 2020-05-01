package pl.l3.bufet.dishCategory;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DishCategoryRepository extends JpaRepository<DishCategory, Long> {

    Optional<DishCategory> findByName(String name);
}
