package com.lr.springbootsecurity.controller;

import com.lr.springbootsecurity.entity.Msg;
import com.lr.springbootsecurity.entity.Person;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
public class PersonController {
    @RequestMapping("/homepage")
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
    public String index(Model model) {
//        Msg msg = new Msg("测试标题", "测试内容", "额外信息，只对管理员显示");
//        model.addAttribute("msg", msg);
        return "home";
    }
    @RequestMapping("/redirect")
    public String goToURL(@RequestParam ("pagename") String pagename){
        return pagename;
    }
}
