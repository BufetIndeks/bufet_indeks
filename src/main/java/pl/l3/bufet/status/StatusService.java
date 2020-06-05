package pl.l3.bufet.status;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StatusService {

    StatusRepository statusRepository;

    @Autowired
    public StatusService(StatusRepository statusRepository) {
        this.statusRepository = statusRepository;
    }

    public Status getFirstStatus(){
        Optional<Status> statusOptional = statusRepository.findById(1L);
        if(statusOptional.isPresent())
            return statusOptional.get();
        else
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Nie znaleziono statusu o ID = 1");
    }

    public Status getStatusById(Long id){
        Optional<Status> statusOptional = statusRepository.findById(id);
        if(statusOptional.isPresent())
            return statusOptional.get();
        else
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Nie znaleziono statusu o ID = "+id);
    }

    public List<StatusDTO> getListOfStatus(){
        List<Status> list = statusRepository.findAll();
        List<StatusDTO> dtoList = new ArrayList<>();
        for (Status status : list) {
            dtoList.add(new StatusDTO(status.getId(), status.getStatus()));
        }
        return dtoList;
    }
}
