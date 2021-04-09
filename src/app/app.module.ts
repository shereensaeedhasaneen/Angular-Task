import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ChangeBackgroundOnHoverDirective } from './Directives/change-background-on-hover.directive';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { PopularMoviesComponent } from './Components/popular-movies/popular-movies.component';
import { TopRatedComponent } from './Components/top-rated/top-rated.component';



const firebaseConfig = {
  apiKey: "AIzaSyB8kqKu_hyfoQMpB2NvLAR_FdYNLT1G3Hk",
  authDomain: "movies-angular-task.firebaseapp.com",
  projectId: "movies-angular-task",
  storageBucket: "movies-angular-task.appspot.com",
  messagingSenderId: "551694970001",
  appId: "1:551694970001:web:54b692542aa6384f0da330",
  measurementId: "G-NTYWKKJQP1"
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ChangeBackgroundOnHoverDirective,
    MovieDetailsComponent,
    PopularMoviesComponent,
    TopRatedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
