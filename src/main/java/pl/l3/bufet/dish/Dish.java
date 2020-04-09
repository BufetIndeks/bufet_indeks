package pl.l3.bufet.dish;

import pl.l3.bufet.allergen.Allergen;
import pl.l3.bufet.dishCategory.DishCategory;
import pl.l3.bufet.ingredient.Ingredient;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "danie")
public class Dish {

    //Fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "danie_id")
    private Long id;
    @NotEmpty
    @Column(name = "nazwa", unique = true)
    private String dishName;

    @ManyToMany
    @JoinTable(name = "alergen_danie",
            joinColumns = {@JoinColumn(name = "danie_id", referencedColumnName = "danie_id")},
            inverseJoinColumns = {@JoinColumn(name = "alergen_id", referencedColumnName = "alergen_id")})
    List<Allergen> allergenList = new ArrayList<>();

    @NotEmpty
    @ManyToMany
    @JoinTable(name = "danie_skladnik",
            joinColumns = {@JoinColumn(name = "danie_id", referencedColumnName = "danie_id")},
            inverseJoinColumns = {@JoinColumn(name = "skladnik_id", referencedColumnName = "skladnik_id")})
    List<Ingredient> ingredientsList = new ArrayList<>();

    @NotEmpty
    @ManyToMany
    @JoinTable(name = "danie_kategoria",
            joinColumns = {@JoinColumn(name = "danie_id", referencedColumnName = "danie_id")},
            inverseJoinColumns = {@JoinColumn(name = "kategoria_dania_id", referencedColumnName = "kategoria_dania_id")})
    List<DishCategory> dishCategoryList = new ArrayList<>();

    //Constructor
    public Dish() {}

    //Getter setter


    public List<DishCategory> getDishCategoryList() {
        return dishCategoryList;
    }

    public void setDishCategoryList(List<DishCategory> dishCategoryList) {
        this.dishCategoryList = dishCategoryList;
    }

    public List<Ingredient> getIngredientsList() {
        return ingredientsList;
    }

    public void setIngredientsList(List<Ingredient> ingredientsList) {
        this.ingredientsList = ingredientsList;
    }

    public List<Allergen> getAllergenList() {
        return allergenList;
    }

    public void setAllergenList(List<Allergen> allergenList) {
        this.allergenList = allergenList;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDishName() {
        return dishName;
    }

    public void setDishName(String dishName) {
        this.dishName = dishName;
    }

    @Override
    public String toString() {
        return "Dish{" +
                "id=" + id +
                ", dishName='" + dishName + '\'' +
                ", allergenList=" + allergenList +
                ", ingredientList="+ingredientsList+
                '}';
    }

}
