import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Configure } from 'src/app/models/configure';
import { Picture } from 'src/app/models/picture';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }
  readonly POST_URL = "http://localhost:5000";

  addImg(image: Picture){
     this.httpClient.post(this.POST_URL + '/addImage' , {image:image}).subscribe();
  }

  getAllImgs(){
    return this.httpClient.get<Picture[]>(this.POST_URL + '/getAllImgs');
  }

   editImg(image: Picture){
     console.log(image);
   this.httpClient.post(this.POST_URL + '/update' , {image:image}).subscribe();
   }

  getConfigure(){
    return this.httpClient.get<Configure>(this.POST_URL + '/getConfigure');
  }

  setConfigure(config : Configure){   
    this.httpClient.post(this.POST_URL + '/setConfigure' , {config : config }).subscribe();
  }

  addCategory(category : Category){
    this.httpClient.post(this.POST_URL +'/addCategory', {category : category }).subscribe();
  }

  getCatgories(){
    return this.httpClient.get<Category[]>(this.POST_URL + '/getCategories');
  }

}
