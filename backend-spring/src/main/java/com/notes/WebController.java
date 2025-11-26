package com.notes;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {
    
    @RequestMapping(value = "/")
    public String index() {
        return "forward:/index.html";
    }
    
    @RequestMapping(value = "/{path:^(?!api).*}/**")
    public String redirect() {
        return "forward:/index.html";
    }
}