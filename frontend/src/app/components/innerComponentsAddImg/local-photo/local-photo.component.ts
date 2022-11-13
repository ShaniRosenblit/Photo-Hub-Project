import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/apiService/api.service';
import { PhotosService } from 'src/app/services/photosService/photos.service';

@Component({
  selector: 'app-local-photo',
  templateUrl: './local-photo.component.html',
  styleUrls: ['./local-photo.component.css']
})
export class LocalPhotoComponent implements OnInit {
selectedImg : any; 

  constructor(private photoService : PhotosService, private router : Router) { 
  }

  ngOnInit(): void {
  }
onFileSelected(imgInput){
   const file: File = imgInput.files[0];
   const reader = new FileReader();

   reader.addEventListener('load',(event:any)=>{
this.selectedImg=event.target.result;
   })
    reader.readAsDataURL(file);
}

WantToSave(){
  this.photoService.moveImgToAddDetails(this.selectedImg);
this.router.navigateByUrl("allowAccess/details/addImg/detialsImg");
  }

}
