package pl.l3.bufet.dishCategory;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name="kategoria_dania")
public class DishCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "kategoria_dania_id")
    private Long id;

    @NotEmpty
    @Column(name="nazwa", unique = true, nullable = false)
    private String name;

    public DishCategory() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "DishCategory{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
