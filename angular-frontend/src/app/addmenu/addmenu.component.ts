import { Component,NgModule, OnInit } from '@angular/core';
import {Dish} from './dish'
import * as _ from "lodash"
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpserviceService} from '../service/httpservice.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadFileService} from '../service/upload-file.service'

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {
  newdish: Dish = new Dish();
  head: HttpHeaders;
  disharray: Dish[]=[];
  // =[
  //   {
  //    restaurantName: 'rest1',
  //    dishName:  'masal bhat',
  //    price: 45,
  //    category: 'rice',
  //    vegNonVeg: 'veg',
  //    availability :true,
  //    description :"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content"
  //   },
  //   {
  //     restaurantName: 'rest1',
  //    dishName:  'curd rice',
  //    price: 85,
  //    category: 'rice',
  //    vegNonVeg: 'nonveg',
  //    availability :false,
  //    description :"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content"
  //   },
  //   {
  //     restaurantName: 'rest1',
  //    dishName:  'fried rice',
  //    price: 55,
  //    category: 'rice',
  //    vegNonVeg: 'veg',
  //    availability :true,
  //    description :"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content"
  //   },
  //   {
  //     restaurantName: 'rest1',
  //    dishName:  'pulao',
  //    price: 75,
  //    category: 'rice',
  //    vegNonVeg: 'nonveg',
  //    availability :true,     
  //    description :"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content"
  //   },
  //   {
  //     restaurantName: 'rest1',
  //    dishName:  'pulao',
  //    price: 75,
  //    category: 'rice',
  //    vegNonVeg: 'veg',
  //    availability :true,
  //    description :"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content"
  //   },
  //   {
  //     restaurantName: 'rest1',
  //    dishName:  'pulao',
  //    price: 75,
  //    category: 'rice',
  //    vegNonVeg: 'veg',
  //    availability :true,
  //    description :"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content"
  //   },
  //   {
  //     restaurantName: 'rest1',
  //    dishName:  'pulao',
  //    price: 75,
  //    category: 'rice',
  //    vegNonVeg: 'veg',
  //    availability :true,
  //    description :"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content"
  //   },  
  //   {
  //     restaurantName: 'rest1',
  //    dishName:  'pulao',
  //    price: 75,
  //    category: 'rice',
  //    vegNonVeg: 'veg',
  //    availability :false,
  //    description :"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content"
  //   },
  //   {
  //     restaurantName: 'rest1',
  //    dishName:  'pulao',
  //    price: 75,
  //    category: 'rice',
  //    vegNonVeg: 'veg',
  //    availability :true,
  //    description :"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content"
  //   },
  //   {
  //     restaurantName: 'rest1',
  //    dishName:  'pulao',
  //    price: 75,
  //    category: 'rice',
  //    vegNonVeg: 'nonveg',
  //    availability :false,
  //    description :"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content"
  //   },
  //   {
  //     restaurantName: 'rest1',
  //    dishName:  'pulao',
  //    price: 75,
  //    category: 'rice',
  //    vegNonVeg: 'nonveg',
  //    availability :false,
  //    description :"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content"
  //   },    
  //   {
  //     restaurantName: 'rest1',
  //    dishName:  'pulao',
  //    price: 75,
  //    category: 'rice',
  //    vegNonVeg: 'nonveg',
  //    availability :true,
  //    description :"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content"
  //   },    
  //   {
  //     restaurantName: 'rest1',
  //    dishName:  'pulao',
  //    price: 75,
  //    category: 'rice',
  //    vegNonVeg: 'nonveg',
  //    availability :false,
  //    description :"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content"
  //   },
  //   {
  //     restaurantName: 'rest1',
  //    dishName:  'masal dosa',
  //    price: 45,
  //    category: 'south indian',
  //    vegNonVeg: 'veg',
  //    availability :true,
  //    description :"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content"
  //   },
  //   {
  //     restaurantName: 'rest1',
  //    dishName:  'rawa dosa',
  //    price: 35,
  //    category: 'south indian',
  //    vegNonVeg: 'nonveg',
  //    availability :false,
  //    description :"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content"
  //   },
  //   {
  //     restaurantName: 'rest1',
  //    dishName:  'sada dosa',
  //    price: 40,
  //    category: 'south indian',
  //    vegNonVeg: 'veg',
  //    availability :false,
  //    description :"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content"
  //   },
  //   {
  //     restaurantName: 'rest1',
  //    dishName:  'manturian',
  //    price: 60,
  //    category: 'chienese',
  //    vegNonVeg: 'nonveg',
  //    availability :false,
  //    description :"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content"
  //   },
  //   {
  //     restaurantName: 'rest1',
  //    dishName:  'hakka noodles',
  //    price: 46,
  //    category: 'chienese',
  //    vegNonVeg: 'nonveg',
  //    availability :true,
  //    description :"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content"
  //   },
  //   {
  //     restaurantName: 'rest1',
  //    dishName:  'schezwan noodles',
  //    price: 68,
  //    category: 'chienese',
  //    vegNonVeg: 'veg',
  //    availability :true,
  //    description :"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content"
  //   }
  // ]
  categorySort: any;

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';


  private baseUrl = 'http://localhost:8080';


  constructor(private http: HttpClient,private httpservice: HttpserviceService,private uploadService: UploadFileService) {
    this.newdish.description="";
    this.newdish.availability=false;
    this.head = new HttpHeaders().set('access-control-allow-origin', this.baseUrl);
   }

  ngOnInit() {
    //   this.categorySort = this.disharray.reduce(function (r, a) {
    //     r[a.category] = r[a.category] || [];
    //     r[a.category].push(a);
    //     return r;
    // }, Object.create(null));
    // console.log(this.categorySort);
  }

  catSort(){
    this.categorySort = this.disharray.reduce(function (r, a) {
      r[a.category] = r[a.category] || [];
      r[a.category].push(a);
      return r;
  }, Object.create(null));
  console.log(this.categorySort);

  }

  get key(){
    return Object.keys(this.categorySort);
  }
 
  submitAddDish(form: NgForm): void {
    console.log(this.newdish);
    this.createDish(this.newdish);
    // this.createDish(this.newdish)
    // .then(createTodo => {        
    //   form.reset();
    //   // console.log(this.newTodo.createdAt);
    // this.newdish = new Dish();
    // this.newdish.description='';
    // this.newdish.availability=false;
    // });

    // this.newdish = new Dish();
    // this.newdish.description='';
    // this.newdish.availability=false;
  }



  createDish(dishObj: Dish)
  // : Promise<Dish> {
  //   return this.http.post(this.baseUrl + '/dishdata/dishes/', dishObj)
  //     .toPromise().then(response => { console.log(response);})
  //     .catch(this.handleError);
  // }
 {
    this.http.post(this.baseUrl + '/dishdata/dishes/', dishObj, { headers: this.head })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        },
        () => {console.log('HTTP request completed.');
               this.disharray.unshift(this.newdish);
               this.newdish = new Dish();
               this.newdish.description='';
               this.newdish.availability=false;
               this.catSort();
              }
      );
      
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;
  
    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          // this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
  
    this.selectedFiles = undefined;
  }

private handleError(error: any): Promise<any> {
      // console.error('Some error occured', error);
      return Promise.reject(error.message || error);
    }


}

