import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

import { AllowAccessComponent } from './components/allow-access/allow-access.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { AddImgPageComponent } from './components/add-img-page/add-img-page.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { DetailPictureComponent } from './components/detail-picture/detail-picture.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path:'', component: HomePageComponent },
  { path:'about', component:AboutComponent},
  { path:'allowAccess', component: AllowAccessComponent },
  { path:'allowAccess/details', component: DetailsPageComponent },
  { path:'allowAccess/details/addImg' , component :AddImgPageComponent},
  { path:'allowAccess/details/addImg/main' , component :MainScreenComponent},
  { path:'allowAccess/details/addImg/detialsImg/main' , component :MainScreenComponent},
  { path:'allowAccess/details/addImg/detialsImg', component:DetailPictureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
