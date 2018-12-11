package com.lr.springbootsecurity.service.impl;

import com.lr.springbootsecurity.dao.DemoMapper;
import com.lr.springbootsecurity.entity.DemoEntity;
import com.lr.springbootsecurity.service.DemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author: zzx
 * @date: 2018/10/25 17:03
 * @description:
 */
@Service
public class DemoServiceImpl implements DemoService {

    @Autowired
    private DemoMapper demoMapper;

    @Override
    public List<DemoEntity> getUser() {
        return demoMapper.getUser();
    }
}
