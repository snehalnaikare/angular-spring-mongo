package com.example.todoapp.controllers;

import com.example.todoapp.repositories.DishRepository;
import com.example.todoapp.models.Dish;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dishdata")
@CrossOrigin(origins="*", allowedHeaders = "*")
public class DishController {
	@Autowired
	DishRepository dishRepository;
	

    @PostMapping("/dishes")
    public ResponseEntity<Dish> createDish(@Valid @RequestBody Dish dish) {
         dishRepository.save(dish);
         return ResponseEntity.ok().body(dish);
    }

}
