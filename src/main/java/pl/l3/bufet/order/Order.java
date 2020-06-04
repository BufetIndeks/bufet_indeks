package pl.l3.bufet.order;

import net.bytebuddy.implementation.bind.annotation.Default;
import org.springframework.format.annotation.NumberFormat;
import pl.l3.bufet.dish.Dish;
import pl.l3.bufet.status.Status;
import pl.l3.bufet.user.User;

import javax.persistence.*;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="zamowienie")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "zamowienie_id")
    private Long id;


    @Column(name = "cena_zamowienia")
    private double finalPrice = 0;


    @Column(name="zaplacone")//, columnDefinition = "boolean default false")
    private Boolean paid;

    //@NotEmpty
    @ManyToMany
    @JoinTable(name = "zamowienie_danie",
            joinColumns = {@JoinColumn(name="zamowienie_id", referencedColumnName="zamowienie_id")},
            inverseJoinColumns = {@JoinColumn(name="danie_id", referencedColumnName="danie_id")})
    List<Dish> orderDishesList = new ArrayList<>();

    @NotNull
    @ManyToOne
    @JoinColumn(name = "client_id")
    User user;

    @NotNull
    @ManyToOne
    @JoinColumn(name="status")
    Status status;

    @Column(name="data_zamowienia")
    Date date;

    public Order() {}

    public Boolean getPaid() {
        return paid;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setPaid(Boolean paid) {
        this.paid = paid;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getFinalPrice() {
        return finalPrice;
    }

    public void setFinalPrice(double finalPrice) {
        this.finalPrice = finalPrice;
    }

    public List<Dish> getOrderDishesList() {
        return orderDishesList;
    }

    public void setOrderDishesList(List<Dish> orderDishesList) {
        this.orderDishesList = orderDishesList;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", finalPrice=" + finalPrice +
                ", user=" + user.getLogin() +
                '}';
    }
}
