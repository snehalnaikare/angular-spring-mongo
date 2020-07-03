package com.example.todoapp.models;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="names")
public class Name {
    @Id
    private String id;

    @NotBlank
    @Size(max=100)
    @Indexed(unique=true)
    private String name;
    
	@NotBlank
    @Size(max=100)
    private String catagory;
	
	
    public Name() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    

	public Name(@NotBlank @Size(max = 100) String name, @NotBlank @Size(max = 100) String catagory) {
		
		this.name = name;
		this.catagory = catagory;
	}



	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCatagory() {
		return catagory;
	}

	public void setCatagory(String catagory) {
		this.catagory = catagory;
	}

	@Override
	public String toString() {
		return "Name [id=" + id + ", name=" + name + ", catagory=" + catagory + "]";
	}

    
    
     
}
