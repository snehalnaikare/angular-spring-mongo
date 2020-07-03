package com.example.todoapp.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.todoapp.models.Name;
import com.example.todoapp.repositories.NameRepository;

@RestController
@RequestMapping("/food")
@CrossOrigin(origins="http://localhost:4200")

public class NameController {
	@Autowired
    NameRepository nameRepository;

 	
    @GetMapping("/names")
    public List<Name> getAllNames() {
    	System.out.println(nameRepository.findAll());
    	
        return nameRepository.findAll();        
    }
    
    @GetMapping("/categories")
    public List<String> getUniqueCatagory() {
    	List<String> hii = Arrays.asList("foo", "bar");
//    	System.out.println(nameRepository.findAll());
//    	System.out.println("\n\n\ncatagoriess: "+ nameService.getUniqueCategory() );
    	//System.out.println("\n\n\ncatagoriess: "+ nameRepository.getUniqueCategory() );
        return nameRepository.getUniqueCategory(); 
    	//return hii;
    }   
    

    @PostMapping("/names")
    public Name createName(@Valid @RequestBody Name name) {
        return nameRepository.save(name);
    }

}
