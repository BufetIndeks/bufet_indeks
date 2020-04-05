package pl.l3.bufet.user;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "roles")
public class UserRole {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="role_id")
    private Long id;
    @Column(name = "role")
    @NotEmpty
    private String role;
    @Column(name="description")
    @NotEmpty
    private String description;

    public UserRole(){}
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    @Override
    public String toString() {
        return "UserRole [id=" + id
                + ", role=" + role
                + ", description=" + description + "]";
    }
}