package com.lr.springbootsecurity.entity;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serializable;
import java.util.Collection;
import java.util.Set;

/**
 * @description: 定义user对象
 */
@Data
public class SelfUserDetails implements UserDetails, Serializable {
    private static final long serialVersionUID = 7171722954972237961L;

    private Integer userId;
    private String userName;
    private String userPwd;
    private Set<? extends GrantedAuthority> authorities;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    public void setAuthorities(Set<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }

    @Override
    public String getPassword() { // 最重点Ⅰ
        return this.userPwd;
    }

    @Override
    public String getUsername() { // 最重点Ⅱ
        return this.userName;
    }

    public void setuserName(String userName) {
        this.userName = userName;
    }

    public void setPassword(String password) {
        this.userPwd = password;
    }

    //账号是否过期
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    //账号是否锁定
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    //账号凭证是否未过期
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public Integer getId() {
        return userId;
    }

    public void setId(Integer id) {
        this.userId = id;
    }
}