import { Component, Inject, OnInit } from '@angular/core';
import { Picture } from 'src/app/models/picture';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MainScreenComponent } from '../main-screen/main-screen.component';
import { GoogleMapsLoctionComponent } from '../google-maps-loction/google-maps-loction.component';
import { ApiService } from 'src/app/services/apiService/api.service';
import { FormControl } from '@angular/forms';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-edit-img',
  templateUrl: './edit-img.component.html',
  template: 'passed in {{ data.image }}',
  styleUrls: ['./edit-img.component.css']
})
export class EditImgComponent implements OnInit {
image : Picture = new Picture();
statePrivetMode: string;
isLoctionAllow : boolean;
allCatgories : Category[] = [];
picCategories: Category[] =[];
picCategory = new FormControl();
  constructor(@Inject(MAT_DIALOG_DATA) public data: {image: Picture} , private dialogRef : MatDialogRef<MainScreenComponent> , private dialog:MatDialog, private service:ApiService) {
    this.image = data.image;
    this.service.getConfigure().subscribe((data=>{
    this.isLoctionAllow = data.allowCamra;
    }));
    this.service.getCatgories().subscribe((data =>{
      this.allCatgories = data;
      }));
      this.picCategory.setValue(this.image.categories);
  }
   
  ngOnInit(): void {
    if(this.image.privateMode === true){
      this.statePrivetMode = 'lock'
    }else this.statePrivetMode = 'lock_open'
  }
  selectCatgories(){
    this.picCategories = this.picCategory.value;
    this.image.categories = this.picCategories; 
  }
  changeStatePrivetMode(){
    if(this.image.privateMode ===true){
      this.image.privateMode = false;
      this.statePrivetMode = 'lock_open';
    }else{
      this.image.privateMode = true;
      this.statePrivetMode = 'lock';
    } 
  }
  changeStateFavorit(){
this.image.favorite =!this.image.favorite; 
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

  updatePhoto(){
    if(this.isLoctionAllow === false) {
      this.image.latPointLoctoin= null;
      this.image.lngPointLoctoin =null;
    }
    this.dialogRef.close({data : this.image});
  }

  compareWithImage(category1:Category,category2:Category){
    return category1 && category2 ? category1.name === category2.name : category1===category2;
  }

}
