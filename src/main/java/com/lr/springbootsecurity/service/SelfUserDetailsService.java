package com.lr.springbootsecurity.service;

import com.lr.springbootsecurity.dao.UserMapper;
import com.lr.springbootsecurity.entity.DemoEntity;
import com.lr.springbootsecurity.entity.SelfUserDetails;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * @description: 用户认证、权限
 */
@Component
@Slf4j
public class SelfUserDetailsService implements UserDetailsService {

    @Autowired
    private UserMapper userMapper;
//    private final static Logger logger = LoggerFactory.getLogger(SelfUserDetailsService.class);
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        //通过username查询用户
        SelfUserDetails user = userMapper.getUser(username);
        if(user == null){
            //仍需要细化处理
            throw new UsernameNotFoundException("该用户不存在");
        }

        Set authoritiesSet = new HashSet();
        // 模拟从数据库中获取用户角色
//        GrantedAuthority authority = new SimpleGrantedAuthority("ROLE_ADMIN");
//        authoritiesSet.add(authority);
        List<Map<String,Object>> roleList = userMapper.getUserRole(user.getUserId());
        for (Map role : roleList) {
            log.info("用户{}验证通过有{}权限",username,role.get("role_name").toString());
            authoritiesSet.add(new SimpleGrantedAuthority(role.get("role_name").toString()));
        }
        user.setAuthorities(authoritiesSet);
        log.info("用户{}验证通过",username);

        return user;
    }
}
