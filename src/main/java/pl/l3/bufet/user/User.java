package pl.l3.bufet.user;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="user")
public class User { @Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "user_id")


    private Long id;
    @NotEmpty
    @Column(name = "login")
    private String login;
    @NotEmpty
    @Column(name = "password")
    private String password;
    @ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JoinTable(name = "user_role",
            joinColumns = {@JoinColumn(name="user_id", referencedColumnName="user_id")},
            inverseJoinColumns = {@JoinColumn(name="role_id", referencedColumnName="role_id")})
    private Set<UserRole> roles = new HashSet<>();

    public User(){}

    public User(@NotEmpty String login, @NotEmpty String password) {
        this.login = login;
        this.password = password;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public Set<UserRole> getRoles() {
        return roles;
    }
    public void setRoles(Set<UserRole> roles) {
        this.roles = roles;
    }
    @Override
    public String toString() {
        return "User [id=" + id
                + ", password=" + password
                + ", roles=" + roles + "]";
    }
}