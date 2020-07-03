package com.example.todoapp.repositories;

import com.example.todoapp.models.Dish;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DishRepository extends MongoRepository<Dish, String> {
//	public DistinctIterable<String> getUniqueTask() {
//	    return MongoTemplate.getCollection().distinct("catagory", String.class);
//	}
	
	
}