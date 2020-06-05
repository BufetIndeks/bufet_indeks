package pl.l3.bufet.dish;

import pl.l3.bufet.allergen.Allergen;
import pl.l3.bufet.dishCategory.DishCategory;
import pl.l3.bufet.ingredient.Ingredient;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.sql.Blob;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "danie")
public class Dish {

    //Fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "danie_id")
    private Long id;
    @Column(name = "nazwa", unique = true, nullable = false, length = 128)
    private String dishName;
    @Lob
    @Column(name="obraz")
    private byte[] dishImage;
    @Column(name="cena", nullable = false)
    private Double price;
    @Column(name="opis", length = 512)
    private String description;
    @Column(name="danie_dnia",nullable = false)
    private boolean dishDay = false;
    @Column(name="usuniety",nullable = false)
    private boolean active;

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

    public byte[] getDishImage() {
        return dishImage;
    }

    public void setDishImage(byte[] dishImage) {
        this.dishImage = dishImage;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isDishDay() {
        return dishDay;
    }

    public void setDishDay(boolean dishDay) {
        this.dishDay = dishDay;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public List<Ingredient> getIngredientsList() {
        return ingredientsList;
    }

    public void setIngredientsList(List<Ingredient> ingredientsList) {
        this.ingredientsList = ingredientsList;
    }

    public List<DishCategory> getDishCategoryList() {
        return dishCategoryList;
    }

    public void setDishCategoryList(List<DishCategory> dishCategoryList) {
        this.dishCategoryList = dishCategoryList;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Dish dish = (Dish) o;
        return dishDay == dish.dishDay &&
                active == dish.active &&
                Objects.equals(id, dish.id) &&
                Objects.equals(dishName, dish.dishName) &&
                Objects.equals(dishImage, dish.dishImage) &&
                Objects.equals(price, dish.price) &&
                Objects.equals(description, dish.description) &&
                Objects.equals(ingredientsList, dish.ingredientsList) &&
                Objects.equals(dishCategoryList, dish.dishCategoryList);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, dishName, dishImage, price, description, dishDay, active, ingredientsList, dishCategoryList);
    }
}
