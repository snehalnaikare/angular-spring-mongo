package com.example.todoapp.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.todoapp.models.Name;
import com.example.todoapp.repositories.customRepository;

@Repository
public interface NameRepository extends  MongoRepository<Name, String>,customRepository {



}
