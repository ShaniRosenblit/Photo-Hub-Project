import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { config } from 'rxjs';
import { Picture } from 'src/app/models/picture';
import { PhotosService } from 'src/app/services/photosService/photos.service';
import {PexelOnlineServiceService} from '../../../services/pexelOnlineService/pexel-online-service.service'
@Component({
  selector: 'app-online-photo',
  templateUrl: './online-photo.component.html',
  styleUrls: ['./online-photo.component.css']
})
export class OnlinePhotoComponent implements OnInit {
countPhoto = 10;
search:string = '';
dataPhotos : any[] = [];
selectedPhoto: any;
  constructor(private pexelOnline : PexelOnlineServiceService ,private photoService:PhotosService , private router:Router) { 
    this.pexelOnline.getData(this.search , this.countPhoto)
 
  }

  ngOnInit(): void {   
  }
searchPhoto(){
this.pexelOnline.getData(this.search , this.countPhoto).subscribe((data) => {
this.dataPhotos = data.photos;
},(error) => {
  console.log(error);
})
  }

selectPhoto(photoSrc : string){
  this.getBase64FromUrl(photoSrc).then((img =>{
    this.selectedPhoto = img;
    let answer = confirm("Want to save this photo?")
    if(answer === true){
      this.wantToSave();
    }
  }));
}

  wantToSave(){
    if(this.selectedPhoto !== undefined)
    {
      this.photoService.moveImgToAddDetails(this.selectedPhoto);
      this.router.navigateByUrl("allowAccess/details/addImg/detialsImg");
    }
   else alert("You need to pick photo pirst");
  }

  getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      }
    });
  }

}
