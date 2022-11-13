import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Configure } from 'src/app/models/configure';
import { ApiService } from 'src/app/services/apiService/api.service';
import { PhotosService } from 'src/app/services/photosService/photos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
configure = new Configure();
category = new Category()
  constructor(private apiService:ApiService , private photoService:PhotosService) {
   }

  ngOnInit(): void {
  }
  addCatgory(){
   let valInput = prompt("Add category:",'');
   console.log(valInput);
   
   if(valInput !== '' && valInput !==null){
    this.category.name = valInput;
    this.apiService.addCategory(this.category);
   } 
  }


  changePrivateMode(){

this.photoService.getConfigurtion().subscribe((con) => {
  this.configure = con
  console.log(this.configure.isInPrivateMode);
  if(this.configure.allowPrivateMode){
    if(this.configure.isInPrivateMode){
      this.configure.isInPrivateMode =! this.configure.isInPrivateMode;
      this.photoService.updateConfigurtion(this.configure);
      this.apiService.setConfigure(this.configure);
    }else{
      let password =  prompt("Set your privare mode kye",''); 
      if(password === this.configure.passwordPrivateMode){
        this.configure.isInPrivateMode =! this.configure.isInPrivateMode;
        this.photoService.updateConfigurtion(this.configure);
        this.apiService.setConfigure(this.configure);
      }
      else{
        alert("invalid password");
      }
    }
  }else{
    alert("You need to allow private mode pirst");
  }
});   
 
  }
}
