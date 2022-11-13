import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/apiService/api.service';

@Component({
  selector: 'app-add-img-page',
  templateUrl: './add-img-page.component.html',
  styleUrls: ['./add-img-page.component.css']
})
export class AddImgPageComponent implements OnInit {
  choosenMode?: string;
  local = true;
  camera = false;
  online = false;
  isCameraAllow : boolean;
  constructor(private apiService : ApiService) {
    this.apiService.getConfigure().subscribe((data =>{
      this.isCameraAllow = data.allowCamra;
    })) 
 }

  ngOnInit(): void {
  }

  showModeOnline(){
this.local = false;
this.camera = false;
this.online = true;
  }
  showModeLocal(){
  this.local = true;
this.camera = false;
this.online = false;
  }
  showModeCamera(){
    this.local = false;
    this.camera = true;
    this.online = false;
  }
}
