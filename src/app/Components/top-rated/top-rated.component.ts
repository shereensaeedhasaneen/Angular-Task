import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/ViewModels/movies';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MoviesServiceService } from 'src/app/Services/movies-service.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
  topRateMoviesList:Movies[]|any=[];
  constructor(private db: AngularFirestore,private router:Router , private popularMovieService:MoviesServiceService) { 
    this.retrieveTopRatedrMovies();
  }

  ngOnInit(): void {
  }

  retrieveTopRatedrMovies(): void {
    this.popularMovieService.getAllTopRatedMovies().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ idcollection: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.topRateMoviesList = data;
     console.log(this.topRateMoviesList)
    });
  }
///////////////////////////////////////
  goTopMoviedetails(idTopRatedMovie:string){
    this.router.navigate(['/topRateMovie/'+(idTopRatedMovie)])
  }
/////////////////////////////////////////////////////////////////


//////////// Sorted Popular Desc////////////////////////////
retrievesortedMovies_Popular_Desc(): AngularFirestoreCollection<Movies> {
  
  return this.db.collection("TopRatedMovies", (ref) =>
    ref.orderBy('popularity','desc')) 
  
}

sort_Popular_desc(){
  this.retrievesortedMovies_Popular_Desc()
  .snapshotChanges()
    .pipe(
      map((changes) =>
        changes.map(
          (o) => (
            console.log({ ...o.payload.doc.data() }),
            {...o.payload.doc.data() }
          )
        )
      )
    )
    .subscribe((response) => (this.topRateMoviesList = response));
   
}

//////////// Sorted Popular Asc////////////////////////////
retrievesortedMovies_Popular_Asc(): AngularFirestoreCollection<Movies> {
  
  return this.db.collection("TopRatedMovies", (ref) =>
    ref.orderBy('popularity')) 
  
}

sort_Popular_Asc(){
  this.retrievesortedMovies_Popular_Asc()
  .snapshotChanges()
    .pipe(
      map((changes) =>
        changes.map(
          (o) => (
            console.log({ ...o.payload.doc.data() }),
            {...o.payload.doc.data() }
          )
        )
      )
    )
    .subscribe((response) => (this.topRateMoviesList = response));
   
}


//////////// Sorted Rate Asc////////////////////////////
retrievesortedMovies_Rate_Asc(): AngularFirestoreCollection<Movies> {
  
  return this.db.collection("TopRatedMovies", (ref) =>
    ref.orderBy('vote_count')) 
  
}

sort_Rate_Asc(){
  this.retrievesortedMovies_Rate_Asc()
  .snapshotChanges()
    .pipe(
      map((changes) =>
        changes.map(
          (o) => (
            console.log({ ...o.payload.doc.data() }),
            {...o.payload.doc.data() }
          )
        )
      )
    )
    .subscribe((response) => (this.topRateMoviesList = response));
   
}


//////////// Sorted Rate Desc////////////////////////////
retrievesortedMovies_Rate_desc(): AngularFirestoreCollection<Movies> {
  
  return this.db.collection("TopRatedMovies", (ref) =>
    ref.orderBy('vote_count','desc')) 
  
}

sort_Rate_Desc(){
  this.retrievesortedMovies_Rate_desc()
  .snapshotChanges()
    .pipe(
      map((changes) =>
        changes.map(
          (o) => (
            console.log({ ...o.payload.doc.data() }),
            {...o.payload.doc.data() }
          )
        )
      )
    )
    .subscribe((response) => (this.topRateMoviesList = response));
   
}


 

}
