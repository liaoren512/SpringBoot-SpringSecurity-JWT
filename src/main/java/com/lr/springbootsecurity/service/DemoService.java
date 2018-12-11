package com.lr.springbootsecurity.service;


import com.lr.springbootsecurity.entity.DemoEntity;

import java.util.List;

/**
 * @author: zzx
 * @date: 2018/10/25 17:00
 * @description:
 */
public interface DemoService {

    List<DemoEntity> getUser();

}
