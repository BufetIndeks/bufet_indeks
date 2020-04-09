package pl.l3.bufet.order;

import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public void add(Order order){
        orderRepository.save(order);
    }

    public List<Order> findI(Long id){
       List<Order> optional = orderRepository.findAll();
        return optional;
    }

}
