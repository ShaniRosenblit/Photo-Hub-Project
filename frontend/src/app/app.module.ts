import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule , NoopAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/appComponnet/app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AllowAccessComponent } from './components/allow-access/allow-access.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { AddImgPageComponent } from './components/add-img-page/add-img-page.component';
import { WebcamSnapshotComponent } from './components/innerComponentsAddImg/webcam-snapshot/webcam-snapshot.component';
import { LocalPhotoComponent } from './components/innerComponentsAddImg/local-photo/local-photo.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { OnlinePhotoComponent } from './components/innerComponentsAddImg/online-photo/online-photo.component';
import { EditImgComponent } from './components/edit-img/edit-img.component';
import {GoogleMapsLoctionComponent} from './components/google-maps-loction/google-maps-loction.component';
import { DetailPictureComponent } from './components/detail-picture/detail-picture.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    AllowAccessComponent,
    DetailsPageComponent,
    AddImgPageComponent,
    WebcamSnapshotComponent,
    LocalPhotoComponent,
    MainScreenComponent,
    OnlinePhotoComponent,
    EditImgComponent,
    GoogleMapsLoctionComponent,
    DetailPictureComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonToggleModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    IvyCarouselModule,
    MatCarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey:''})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
