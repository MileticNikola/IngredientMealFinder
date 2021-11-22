import {Component} from '@angular/core';
import { HttpClient } from "@angular/common/http";

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
  startingItemNum: number = 0;
  maxItemsPerView: number = 10;

  constructor(private http:HttpClient){

  }

  startingItem(){
    this.startingItemNum+=10;
    this.receiveMessage(this.message);
  }
  receiveMessage($event:any){
    this.message = $event;
    this.http.get(this.apiUrlBase+this.apiFilterByMainIngredient+this.message).toPromise().then( data => {
      this.menu = this.resultList(data);
    })
  }
  resultList(data:any){
    if(data != null){
      console.log("total meals: "+data.meals.length);
      console.log("loaded meals:");
      console.log(data.meals.slice(0,this.maxItemsPerView));
      this.maxItemsPerView+=this.startingItemNum;
      return data.meals.slice(0,this.maxItemsPerView); //fakes receiving pages via api
    }
  }

}
/**
  API documentation: https://www.themealdb.com/api.php
 */
