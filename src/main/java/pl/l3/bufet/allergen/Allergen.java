package pl.l3.bufet.allergen;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "alergen")
public class Allergen {

    //Fields

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "alergen_id")
    private Long id;

    //Constructors

    @NotEmpty
    @Column(name="nazwa_alergenu", unique = true)
    private String allergenName;

    //Getters setters

    public Allergen() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAllergenName() {
        return allergenName;
    }

    public void setAllergenName(String allergenName) {
        this.allergenName = allergenName;
    }

    @Override
    public String toString() {
        return "Allergen{" +
                "allergenName='" + allergenName + '\'' +
                '}';
    }
}
