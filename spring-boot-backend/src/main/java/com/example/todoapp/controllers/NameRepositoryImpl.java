package com.example.todoapp.controllers;

import java.io.Console;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.example.todoapp.models.Name;
import com.example.todoapp.repositories.NameRepository;
import com.mongodb.client.DistinctIterable;
import com.mongodb.client.MongoCursor;
 
@Service

public class NameRepositoryImpl {
 @Autowired
 NameRepository nameRepository;

 
 
//            @Service
//            Class NameRepositoryIMpl
//            @Autowired NameRepository
//                ^
//                |
//                |
//             @repository                       Class customRepositoryImpl
//             Interface NameRespository         @Autowired MongoTemplate
//               ^                    ^            ^
//               |                    |            |
//             extend              extend        implements
//               |                    |            |
//          MongoRepository        interface CustomRepository
// 
//    * class which implements custom repository should have the name in format "reponameImpl" suffix "Impl" is must.
}
