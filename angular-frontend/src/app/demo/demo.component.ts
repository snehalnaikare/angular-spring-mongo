import { Component,Input, OnInit } from '@angular/core';
import {Name} from "../nameModel"
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  private baseUrl = 'http://localhost:8080';
  constructor(private http: Http) { }
  
  newName: Name = new Name();
  // response:Name[]=[];
  submitForm(NameForm: NgForm) : void{
    console.log(this.newName);
     this.createName(this.newName);
     this.getNames();
     this.getUniqueCatergory();
    NameForm.reset();

  }

  getNames():  Promise<Name[]> {
    return this.http.get(this.baseUrl + '/food/names/')
      .toPromise()
      .then(response => {response.json() as Name[]; console.log("hi",response.json());})
      .catch(this.handleError);
    }

    getUniqueCatergory():  Promise<string[]> {
      return this.http.get(this.baseUrl + '/food/categories/')
        .toPromise()
        .then(response => {response.json() as string[]; console.log("hi",response.json());})
        .catch(this.handleError);
      }

    createName(namedemo: Name): Promise<Name> {
      return this.http.post(this.baseUrl + '/food/names/', namedemo)
        .toPromise().then(response => response.json() as Name)
        .catch(this.handleError);
    }

  private handleError(error: any): Promise<any> {
        console.error('Some error occured', error);
        return Promise.reject(error.message || error);
      }

  ngOnInit() {
  }

}
