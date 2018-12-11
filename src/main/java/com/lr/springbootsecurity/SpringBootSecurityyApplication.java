package com.lr.springbootsecurity;

import com.lr.springbootsecurity.entity.Person;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

//@Controller
@MapperScan(basePackages = {"com.lr.springbootsecurity.dao"})
@SpringBootApplication
public class SpringBootSecurityyApplication {

//    @Value(value = "${book.author}")
//    private String bookAuthor;
//    @Value("${book.name}")
//    private String bookName;
//    @Value("${book.pinyin}")
//    private String bookPinYin;

    public static void main(String[] args) {
        SpringApplication.run(SpringBootSecurityyApplication.class, args);
    }
//    a
//    @RequestMapping(value = "/",produces = "text/plain;charset=UTF-8")
//    public String index(){
//        return "Hello Spring Boot! The BookName is "+bookName+";and Book Author is "+bookAuthor+";and Book PinYin is "+bookPinYin;
//    }
//    @RequestMapping("/")
//    public String index(Model model) {
//        Person single = new Person("aa", 11);
//        List<Person> people = new ArrayList<>();
//        Person p1 = new Person("zhangsan", 11);
//        Person p2 = new Person("lisi", 22);
//        Person p3 = new Person("wangwu", 33);
//        people.add(p1);
//        people.add(p2);
//        people.add(p3);
//        model.addAttribute("singlePerson", single);
//        model.addAttribute("people", people);
//        return "index";
//    }
}
