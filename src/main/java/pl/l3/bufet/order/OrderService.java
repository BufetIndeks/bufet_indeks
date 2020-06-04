package pl.l3.bufet.order;

import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import pl.l3.bufet.dish.Dish;
import pl.l3.bufet.status.Status;
import pl.l3.bufet.status.StatusService;
import pl.l3.bufet.user.User;
import pl.l3.bufet.user.UserService;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    OrderRepository orderRepository;
    StatusService statusService;
    UserService userService;

    @Autowired
    public OrderService(OrderRepository orderRepository, StatusService statusService, UserService userService) {
        this.orderRepository = orderRepository;
        this.statusService = statusService;
        this.userService = userService;
    }




    public Long add(Order order) {
        //SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        Date date = new Date();
        order.setDate(date);
        order.setStatus(statusService.getFirstStatus());
        for (Dish dish : order.getOrderDishesList()) {
            order.setFinalPrice(order.getFinalPrice() + dish.getPrice());
        }
        User user = userService.findUserByLogin(order.getUser().getLogin());
        order.setUser(user);
        orderRepository.save(order);
        return order.getId();
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public ResponseEntity<String> changeStatus(Long id, Status status) {
        Optional<Order> optionalOrder = orderRepository.findById(id);
        Status statusCopy = statusService.getStatusById(status.getId());
        if(optionalOrder.isPresent()) {
            optionalOrder.get().setStatus(statusCopy);
            return ResponseEntity.ok().build();
        }else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Nie ma takiego zamówienia, bądź status jest błędny");
        }
    }

}
