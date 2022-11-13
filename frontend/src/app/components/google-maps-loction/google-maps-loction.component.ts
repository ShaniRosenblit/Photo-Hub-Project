import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditImgComponent } from '../edit-img/edit-img.component';

@Component({
  selector: 'app-google-maps-loction',
  templateUrl: './google-maps-loction.component.html',
  template: 'passed in {{ data.lat , data.lng}}',
  styleUrls: ['./google-maps-loction.component.css']
})
export class GoogleMapsLoctionComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {lat , lng} ,private dialogRef : MatDialogRef<EditImgComponent> ) {
    this.lat = data.lat;
    this.lng = data.lng;
   }

  ngOnInit(): void {

  }
  placeMarkerAndPenTo(Latting:google.maps.LatLng, map : google.maps.Map){
    this.lat = Latting.lat();
    this.lng = Latting.lng();
  }
  mapReady(map)
  {
    map.addListener("click",(e) =>{
      this.placeMarkerAndPenTo(e.latLng,map);
    });
  }

  saveLocation(){
    this.dialogRef.close({event:"save", data: {lat:this.lat , lng:this.lng}});
  }

  saveMyLoction(){
    navigator.geolocation.getCurrentPosition(position =>{
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    });
  }
}
