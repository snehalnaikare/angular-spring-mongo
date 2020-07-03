import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dish } from '../addmenu/dish'

@Injectable()
export class HttpserviceService {
  head: HttpHeaders;
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
    this.head = new HttpHeaders().set('access-control-allow-origin', this.baseUrl);
   }

   createDish(dishObj: Dish) {
    this.http.post(this.baseUrl + '/dishdata/dishes/', dishObj, { headers: this.head })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          // document.getElementById('fail').style.display = 'block';
        },
        () => console.log('HTTP request completed.')
      );
      
  }

}
