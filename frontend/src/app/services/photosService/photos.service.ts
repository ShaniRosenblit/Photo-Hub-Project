import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configure } from 'src/app/models/configure';
import { ApiService } from '../apiService/api.service';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {
selecdetImgSrc:any;
configDetails : Configure = new Configure();
changeViewLayout$:EventEmitter<string>;
enterToPrivateMode$:EventEmitter<boolean>;
  constructor( private apiService : ApiService)  { 
    this.enterToPrivateMode$ = new EventEmitter<boolean>();
    this.getConfigurtion().subscribe((confiure) => {this.enterToPrivateMode$.emit(confiure.isInPrivateMode)});
    this.changeViewLayout$ =new EventEmitter<string>();
    this.getConfigurtion().subscribe((confiure)=>{this.changeViewLayout$.emit(confiure.defultview)});
  }
  
moveImgToAddDetails(imgSrc:any){
this.selecdetImgSrc=imgSrc;
console.log(imgSrc);
}

moveConfig(config : Configure){
this.configDetails = config;
}


getConfigurtion(): Observable<Configure>{
return this.apiService.getConfigure();
}

updateConfigurtion(config : Configure){
this.enterToPrivateMode$.emit(config.isInPrivateMode);
}

updateViewConfig(config : Configure){
  this.changeViewLayout$.emit(config.defultview)
}
}
