package com.springboot.applypage.controller;

import com.springboot.applypage.data.dto.DesignApplicationDto;
import com.springboot.applypage.service.DesignApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/designApplication")
public class DesignApplicationController {
    private final DesignApplicationService designApplicationService;

    @Autowired
    public DesignApplicationController(DesignApplicationService designApplicationService){
        this.designApplicationService = designApplicationService;
    }

    @PostMapping()
    public ResponseEntity<DesignApplicationDto> createDesignApplication(
            @RequestBody DesignApplicationDto DesignApplicationDto)
    {
        DesignApplicationDto designApplicationDtoResponse = designApplicationService.saveDesignApplication(DesignApplicationDto);

        return ResponseEntity.status(HttpStatus.OK).body(designApplicationDtoResponse);
    }

    @GetMapping()
    public ResponseEntity<DesignApplicationDto> getDesignApplication(String sid)
    {
        DesignApplicationDto designApplicationDtoResponse = designApplicationService.getDesignApplication(sid);

        return ResponseEntity.status(HttpStatus.OK).body(designApplicationDtoResponse);
    }

    @PutMapping()
    public ResponseEntity<DesignApplicationDto> updateDesignApplication(
            @RequestBody  DesignApplicationDto designApplicationDto) throws Exception
    {
        DesignApplicationDto designApplicationDtoResponse = designApplicationService.updateDesignApplication(designApplicationDto);

        return ResponseEntity.status(HttpStatus.OK).body(designApplicationDtoResponse);
    }

    @DeleteMapping()
    public ResponseEntity<String> deleteDesignApplication (String sid) throws Exception
    {
        designApplicationService.deleteDesignApplication(sid);

        return ResponseEntity.status(HttpStatus.OK).body("성공적으로 삭제 되었습니다.");
    }
}