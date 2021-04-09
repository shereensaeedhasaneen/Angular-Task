import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/ViewModels/movies';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MoviesServiceService } from 'src/app/Services/movies-service.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  popularMoviesList: Movies[] | any = [];

  constructor( private db: AngularFirestore,private router:Router , private popularMovieService:MoviesServiceService) {
   
    this.retrievePopularMovies();
   }

  ngOnInit(): void {
 
   
  }
  
  /////////// Function To retrieve PopularMovies////////////////////
  retrievePopularMovies(): void {
    this.popularMovieService.getAllPopularMovies().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ idcollection: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.popularMoviesList = data;
     console.log(this.popularMoviesList)
    });
  }
//////////// Sorted Popular Desc////////////////////////////
retrievesortedMovies_Popular_Desc(): AngularFirestoreCollection<Movies> {
  
  return this.db.collection("PopularMovies", (ref) =>
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
    .subscribe((response) => (this.popularMoviesList = response));
   
}

//////////// Sorted Popular Asc////////////////////////////
retrievesortedMovies_Popular_Asc(): AngularFirestoreCollection<Movies> {
  
  return this.db.collection("PopularMovies", (ref) =>
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
    .subscribe((response) => (this.popularMoviesList = response));
   
}


//////////// Sorted Rate Asc////////////////////////////
retrievesortedMovies_Rate_Asc(): AngularFirestoreCollection<Movies> {
  
  return this.db.collection("PopularMovies", (ref) =>
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
    .subscribe((response) => (this.popularMoviesList = response));
   
}


//////////// Sorted Rate Desc////////////////////////////
retrievesortedMovies_Rate_desc(): AngularFirestoreCollection<Movies> {
  
  return this.db.collection("PopularMovies", (ref) =>
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
    .subscribe((response) => (this.popularMoviesList = response));
   
}


  ///////////////// Function To Go to details ////////////////

  goMoviedetails(idPopularMovie:string){
    this.router.navigate(['/movie/'+(idPopularMovie)]);
  }
}
