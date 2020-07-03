package com.example.todoapp.repositories;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

import com.example.todoapp.repositories.customRepository;
import com.mongodb.client.DistinctIterable;
import com.mongodb.client.MongoCursor;


public class customRepositoryImpl implements customRepository{
	
	
@Autowired
MongoTemplate mongoTemplate;

@Override
public List<String> getUniqueCategory(){

	List<String> categoryList = new ArrayList<>();
	DistinctIterable distinctIterable = mongoTemplate.getCollection("names").distinct("catagory", String.class);
	MongoCursor cursor = distinctIterable.iterator();
    while (cursor.hasNext()) {
        String category = (String)cursor.next();
        categoryList.add(category);
    }
    
    return categoryList;
 }
}
