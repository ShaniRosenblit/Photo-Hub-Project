import { Component, OnInit } from '@angular/core';
import { Configure } from 'src/app/models/configure';
import { ApiService } from 'src/app/services/apiService/api.service';
import { PhotosService } from 'src/app/services/photosService/photos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
show = false;
configure = new Configure();
  constructor(private photoService: PhotosService, private apiService: ApiService) {
    this.photoService.getConfigurtion().subscribe((con) => {this.configure = con});
   }

  ngOnInit(): void {
  }
  showOptian(){
this.show = !this.show;
  }
  changeView(){
if(this.configure.defultview ==='list'){
  this.configure.defultview = 'grid';
  this.photoService.updateViewConfig(this.configure);
  this.apiService.setConfigure(this.configure);
}else{
  this.configure.defultview = 'list';
  this.photoService.updateViewConfig(this.configure);
  this.apiService.setConfigure(this.configure);
}
  }
}
