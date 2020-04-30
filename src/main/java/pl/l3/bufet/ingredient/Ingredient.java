package pl.l3.bufet.ingredient;

import pl.l3.bufet.allergen.Allergen;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="skladnik")
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "skladnik_id")
    private Long id;

    @NotEmpty
    @Column(name="skladnik", unique = true)
    private String ingredientName;

    @ManyToMany
    @JoinTable(name = "alergen_skladnik",
            joinColumns = {@JoinColumn(name = "danie_id", referencedColumnName = "skladnik_id")},
            inverseJoinColumns = {@JoinColumn(name = "alergen_id", referencedColumnName = "alergen_id")})
        List<Allergen> allergenList = new ArrayList<>();


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIngredientName() {
        return ingredientName;
    }

    public void setIngredientName(String ingredientName) {
        this.ingredientName = ingredientName;
    }

    public List<Allergen> getAllergenList() {
        return allergenList;
    }

    public void setAllergenList(List<Allergen> allergenList) {
        this.allergenList = allergenList;
    }
}
