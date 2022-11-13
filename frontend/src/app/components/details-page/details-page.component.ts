import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { config } from 'rxjs';
import { Configure } from 'src/app/models/configure';
import { ApiService } from 'src/app/services/apiService/api.service';
import { PhotosService } from 'src/app/services/photosService/photos.service';



@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  confige: Configure=new Configure();

  constructor(private router : Router , private apiService:ApiService,private photoService:PhotosService) {
    this.confige = photoService.configDetails;
   }

  ngOnInit(): void {
  }
  selectView(viewTemp: string){
    this.confige.defultview = viewTemp;
      }
    
  nextPage(){
    if( this.confige.libraryName !== '' && this.confige.defultview !== ''){
      this.apiService.setConfigure(this.confige);
      this.router.navigateByUrl("allowAccess/details/addImg")
    }
    else{
      alert("Library name and defult view template both required field ")
    }
  }
}
