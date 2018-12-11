package com.lr.springbootsecurity.dao;

import com.lr.springbootsecurity.entity.DemoEntity;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * @description:
 */
@Component
public interface DemoMapper {

    List<DemoEntity> getUser();

}
