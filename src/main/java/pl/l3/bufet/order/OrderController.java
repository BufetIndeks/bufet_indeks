package pl.l3.bufet.order;

import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import pl.l3.bufet.status.Status;
import pl.l3.bufet.user.User;
import pl.l3.bufet.user.UserService;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class OrderController {

    OrderService orderService;
    UserService userService;

    @Autowired
    public OrderController(OrderService orderService, UserService userService) {
        this.orderService = orderService;
        this.userService = userService;
    }

    @GetMapping("/getOrders")
    public List<Order> getOrders(){
        return orderService.getAllOrders();
    }

    @PostMapping(value = "/addOrder")
    public Long addOrder(@RequestBody Order order){
        return orderService.add(order);
    }

    @PostMapping("/worker/changeStatus/{id}")
    public ResponseEntity<String> changeStatus(@PathVariable(required = true) Long id, @RequestBody Status status){
        return orderService.changeStatus(id, status);
    }


}
