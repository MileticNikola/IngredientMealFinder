import {Component} from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title: string = 'Angular first proj';
  apiUrlBase: string = 'https://www.themealdb.com/api/json/v1/1/';
  apiFilterByMainIngredient: string = "filter.php?i=";
  data = null;
  message!: string;
  menu = null;
  startingItem: number = 0;
  maxItemsPerView: number = 10;

  constructor(private http:HttpClient){

  }

  receiveMessage($event:any){
    this.message = $event;
    this.http.get(this.apiUrlBase+this.apiFilterByMainIngredient+this.message).toPromise().then( data => {
      this.menu = this.resultList(data);
    })
  }
  resultList(data:any){
    if(data != null){
      console.log(data.meals);
      return data.meals;
    }
  }

}
/**
  API documentation: https://www.themealdb.com/api.php
 */
