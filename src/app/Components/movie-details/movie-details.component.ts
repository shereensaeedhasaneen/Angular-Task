import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Movies } from 'src/app/ViewModels/movies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  PopularmovieID: string = "";
  TopratedmovieID:string="";
  movie: Movies[]|any;
  constructor(private activatedRoute: ActivatedRoute,
               private db: AngularFirestore,
               private Router : Router   ) 
  {
    ///////get popular movie details///////////////////
    let popularMovieIDParam: string|null = this.activatedRoute.snapshot.paramMap.get('idPopularMovie');
    this.PopularmovieID = popularMovieIDParam;
    let TopRatedMovieIDParam: string|null = this.activatedRoute.snapshot.paramMap.get('idTopRatedMovie');
    this.TopratedmovieID = TopRatedMovieIDParam;
    if(this.PopularmovieID==null){
      this.getTopRatedMovie(this.TopratedmovieID);
    }
    else{
      this.getPopularMovie(this.PopularmovieID);
    }
    

     ///////get TopRated movie details///////////////////
    // let TopRatedMovieIDParam: string|null = this.activatedRoute.snapshot.paramMap.get('idTopRatedMovie');
     //this.TopratedmovieID = TopRatedMovieIDParam;
     //this.getTopRatedMovie(this.TopratedmovieID);
   }

  ngOnInit(): void {
  }

  getPopularMovie(id: string) {
    return this.db.collection('PopularMovies').doc(id).ref.get()
      .then((doc) => {
        if (doc.exists) {
          this.movie = doc.data();
        }
        else {
          console.log("There is no document");
        }
      }).catch(function (err) {
        console.log("error !!", err);
      })

  }

  getTopRatedMovie(id: string) {
    return this.db.collection('TopRatedMovies').doc(id).ref.get()
      .then((doc) => {
        if (doc.exists) {
          this.movie = doc.data();
        }
        else {
          console.log("There is no document");
        }
      }).catch(function (err) {
        console.log("error !!", err);
      })

  }

}
