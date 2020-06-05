package pl.l3.bufet.order;

import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import pl.l3.bufet.dish.Dish;
import pl.l3.bufet.status.Status;
import pl.l3.bufet.status.StatusRepository;
import pl.l3.bufet.status.StatusService;
import pl.l3.bufet.user.User;
import pl.l3.bufet.user.UserService;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.*;

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
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
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

    public List<OrderDTO> getAllOrders() {
        List<Order> orderList = orderRepository.findAll();
        List<OrderDTO> orderDTOS = new ArrayList<>();
        for (Order order : orderList) {
            OrderDTO orderDTO = new OrderDTO();
            orderDTO.setDishList(order.getOrderDishesList());
            orderDTO.setId(order.getId());
            orderDTO.setLogin(order.getUser().getLogin());
            orderDTO.setStatus(order.getStatus().getStatus());
            orderDTOS.add(orderDTO);
        }
        return orderDTOS;

    }

    public OrderDTO getOrder(Long id){
        Order order = orderRepository.getOne(id);
        if(order.getId()==null)
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Nie znaleziono takiego zamówienia");
        OrderDTO orderDTO = new OrderDTO();
        orderDTO.setStatus(order.getStatus().getStatus());
        orderDTO.setDishList(order.getOrderDishesList());
        orderDTO.setLogin(order.getUser().getLogin());
        orderDTO.setId(order.getId());
        return orderDTO;
    }

    public ResponseEntity<String> changeStatus(Long id, Status status) {
        Optional<Order> optionalOrder = orderRepository.findById(id);
        Status statusCopy = statusService.getStatusById(status.getId());
        if (optionalOrder.isPresent()) {
            optionalOrder.get().setStatus(statusCopy);
            orderRepository.save(optionalOrder.get());
            return ResponseEntity.ok().build();
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Nie ma takiego zamówienia, bądź status jest błędny");
        }
    }

}
