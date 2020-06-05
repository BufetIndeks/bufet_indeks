package pl.l3.bufet.status;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.l3.bufet.order.Order;

import java.util.List;

@RestController
public class StatusController {

    StatusService statusService;

    @Autowired
    public StatusController(StatusService statusService) {
        this.statusService = statusService;
    }

    @GetMapping(value = "/worker/getStatuses")
    public List<StatusDTO> getStatus(){return  statusService.getListOfStatus();}

}
