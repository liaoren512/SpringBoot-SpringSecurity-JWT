package com.lr.springbootsecurity.dao;

import com.lr.springbootsecurity.entity.SelfUserDetails;
import io.jsonwebtoken.impl.crypto.MacProvider;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

/**
 * @description: 用户dao层
 */
@Component
public interface UserMapper {

    //通过username查询用户
    SelfUserDetails getUser(@Param("username") String username);

    List<Map<String,Object>> getUserRole(@Param("userid") Integer userid);
}
