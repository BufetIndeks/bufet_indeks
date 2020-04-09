package pl.l3.bufet.ingredient;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

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
}
