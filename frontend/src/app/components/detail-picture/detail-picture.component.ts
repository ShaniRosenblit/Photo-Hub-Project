import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Picture } from 'src/app/models/picture';
import { ApiService } from 'src/app/services/apiService/api.service';
import { PhotosService } from 'src/app/services/photosService/photos.service';
import { GoogleMapsLoctionComponent } from '../google-maps-loction/google-maps-loction.component';

@Component({
  selector: 'app-detail-picture',
  templateUrl: './detail-picture.component.html',
  styleUrls: ['./detail-picture.component.css']
})
export class DetailPictureComponent implements OnInit {
image : Picture = new Picture();
isLoctionAllow : boolean;
allCatgories : Category[] = [];
picCategories: Category[] =[];
picCategory = new FormControl();

  constructor(private router : Router ,private photoService : PhotosService , private apiService : ApiService,private dialog:MatDialog) { 
    this.image.src = this.photoService.selecdetImgSrc;
    this.apiService.getConfigure().subscribe((data=>{
    this.isLoctionAllow = data.allowLoctoin;
    }));
  this.apiService.getCatgories().subscribe((data =>{
  this.allCatgories = data;
  }));
  }

  ngOnInit(): void {
  }
  changeLoction(){
    const dialogRef = this.dialog.open(GoogleMapsLoctionComponent,{
      data:{lat: this.image.latPointLoctoin ,lng: this.image.lngPointLoctoin
    }});
    dialogRef.afterClosed().subscribe(result => {
      if(result.event ==="save")
      {
        this.image.loction ='';
        this.image.latPointLoctoin = result.data.lat;
        this.image.lngPointLoctoin = result.data.lng;
      }
    });
  }
  selectCatgories(){
    this.picCategories = this.picCategory.value;
  }

  SaveImg(){
    if(this.image.caption != '' && this.image.loction !='' ||this.image.caption != '' && this.image.latPointLoctoin !=null)
    {    
      this.image.categories = this.picCategories; 
      this.apiService.addImg(this.image);
      this.router.navigateByUrl("allowAccess/details/addImg/detialsImg/main");
    }
  }
}
