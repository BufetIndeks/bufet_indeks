package pl.l3.bufet.order;

import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import pl.l3.bufet.user.User;
import pl.l3.bufet.user.UserService;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Controller
public class OrderController {

    OrderService orderService;
    UserService userService;

    @Autowired
    public OrderController(OrderService orderService, UserService userService) {
        this.orderService = orderService;
        this.userService = userService;
    }

    @GetMapping("/table/order")
    public String addorder(Model model){
        model.addAttribute("order",new Order());
        return "order";
    }

    @PostMapping(value = "/table/order")
    public String addorderr(@ModelAttribute Order order){

                User user = userService.findUserByLogin("admin");
                order.setUser(user);
                orderService.add(order);
        User user1 = userService.findUserByLogin("admin");
                user1.getOrders().forEach(System.out::println);
        System.out.println(order.getUser());
               return "index";
    }

    @GetMapping("/orders")
    public String printt(){

        List<Order> list = orderService.findI(1L);
        list.forEach(System.out::println);
        return "index";
    }

}
