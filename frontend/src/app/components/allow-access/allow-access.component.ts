import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configure } from 'src/app/models/configure';
import { ApiService } from 'src/app/services/apiService/api.service';
import { PhotosService } from 'src/app/services/photosService/photos.service';

@Component({
  selector: 'app-allow-access',
  templateUrl: './allow-access.component.html',
  styleUrls: ['./allow-access.component.css']
})
export class AllowAccessComponent implements OnInit {
configureDb: Configure = new Configure();
password : string = '';
  constructor(private apiService:ApiService, private router :Router , private photoService : PhotosService) { 
     this.apiService.getConfigure().subscribe((config =>{
     if(config){
      this.configureDb = config;
     }}));
  }

  ngOnInit(): void {
  }
nextPage(){
  if(this.configureDb.allowPrivateMode === true && this.password === this.configureDb.passwordPrivateMode){
    this.configureDb.isInPrivateMode = true;
    this.photoService.moveConfig(this.configureDb);
    this.router.navigateByUrl("allowAccess/details");
  }
  else if(this.configureDb.allowPrivateMode === false){
    this.configureDb.passwordPrivateMode = '';
    this.configureDb.isInPrivateMode = false;
    this.photoService.moveConfig(this.configureDb);
    this.router.navigateByUrl("allowAccess/details");
  }else{
    alert("You need to set a password");
  } 

}

setPrivateMode(){
  this.password =  prompt("Enter your privare mode kye",'');  

  if(this.password == this.configureDb.passwordPrivateMode)
  {
    this.configureDb.isInPrivateMode = true;
  }
  else if(this.configureDb.passwordPrivateMode === undefined && this.password !==''){
this.configureDb.passwordPrivateMode = this.password;
this.configureDb.isInPrivateMode = true;
  }
  else alert("invalid password");
}
}
