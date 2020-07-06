import { Component, OnInit } from '@angular/core';
import {Dish} from '../addmenu/dish'
import * as _ from "lodash"

@Component({
  selector: 'app-display-menu',
  templateUrl: './display-menu.component.html',
  styleUrls: ['./display-menu.component.css']
})
export class DisplayMenuComponent implements OnInit {

  constructor() { }

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



  ngOnInit() {
    // this.categorySort = _.groupBy(this.disharray, function(dish) {
    //   return dish.category;
    // });
    // console.log(this.categorySort,this.categorySort[0])

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

}
