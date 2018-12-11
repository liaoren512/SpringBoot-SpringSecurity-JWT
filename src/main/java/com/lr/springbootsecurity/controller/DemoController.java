package com.lr.springbootsecurity.controller;

import com.lr.springbootsecurity.entity.DemoEntity;
import com.lr.springbootsecurity.service.DemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @description: demo
 */
@RestController
@RequestMapping("/test")
public class DemoController {

    @Autowired
    private DemoService orderService;

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping("/getUser")
    public List<DemoEntity> getUser(){
        List<DemoEntity> result = orderService.getUser();
        return result;
    }

}
