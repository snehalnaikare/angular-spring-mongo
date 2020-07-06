package com.example.todoapp;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.bezkoder.spring.files.upload.service.FilesStorageService;




@SpringBootApplication
@ComponentScan("com")
public class TodoappApplication implements CommandLineRunner{
	@Resource
	  FilesStorageService storageService;
	
	public static void main(String[] args) {
		SpringApplication.run(TodoappApplication.class, args);
	}
	
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/dishdata").allowedOrigins("*").allowedHeaders("*").allowedMethods("PUT","DELETE","POST","OPTIONS","GET");
				registry.addMapping("/**").allowedOrigins("*").allowedHeaders("*").allowedMethods("PUT","DELETE","POST","OPTIONS","GET");
			}
		};
	}
	
	@Override
	  public void run(String... arg) throws Exception {
	    storageService.deleteAll();
	    storageService.init();
	  }

}
