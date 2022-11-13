import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/models/category';
import { Configure } from 'src/app/models/configure';
import { Picture } from 'src/app/models/picture';
import { ApiService } from 'src/app/services/apiService/api.service';
import { PhotosService } from 'src/app/services/photosService/photos.service';
import { EditImgComponent } from '../edit-img/edit-img.component';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
dbPhotos : Picture[] = [];
allImgs : Picture[]=[];
configDb = new Configure();
dbPhotoByCategory : Picture[] =[];
dbPhotoByName : Picture[] = [];
dbNonPrivateMode: Picture[] = [];


  constructor(public dialog: MatDialog , private apiService:ApiService , private photoService:PhotosService) { 
    this.photoService.enterToPrivateMode$.subscribe(val =>{this.renderConponent(val)});
    this.photoService.getConfigurtion().subscribe(conf => {this.initConfig(conf)})
    this.photoService.changeViewLayout$.subscribe(val => {this.changeView(val)})
  }

  changeView(val){
this.configDb.defultview = val;
  }

  renderConponent(val :boolean){
  this.configDb.isInPrivateMode =val;
  if(this.configDb.isInPrivateMode){
    this.dbPhotos = this.allImgs;
  }else{
    this.dbPhotos = this.dbNonPrivateMode;
  }

}

initConfig(conf : Configure){
  console.log(conf);
    this.configDb = conf;
    this.getAllPhotos()
  }
 
getAllPhotos(){
  console.log("allImg");
  
  this.apiService.getAllImgs().subscribe((imgs => {
    this.allImgs = imgs;
    imgs.forEach(img => {
      if(!img.privateMode){
        this.dbNonPrivateMode.push(img);
      }
    });
    if(!this.configDb.isInPrivateMode){
      this.dbPhotos = this.dbNonPrivateMode;
    }else{
      this.dbPhotos = this.allImgs;
    }
  }));
}

  ngOnInit(): void {
  }

  selectPhoto(image){
    const dialogRef = this.dialog.open(EditImgComponent,{
      data:{image : image}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
       this.apiService.editImg(result.data);
      }
    });
  }

  getPhotosByName(name){
   this.dbPhotos.forEach(img => {
      if(img.caption ===name){
        this.dbPhotoByName.push(img);
      }
    });
    this.dbPhotos = this.dbPhotoByName;
  }

returnToAll(){
  if(this.configDb.isInPrivateMode){
    this.dbPhotos = this.allImgs;
  }else{
    this.dbPhotos = this.dbNonPrivateMode;
  }
}
  getPhotoByCategory(category){
    this.dbPhotos.forEach(img => {
      img.categories.forEach(catego => {
        if(catego.name === category){
          this.dbPhotoByCategory.push(img);
        }
      });
    });    
    console.log(this.dbPhotoByCategory);
    
    this.dbPhotos = this.dbPhotoByCategory;
  }

}
