import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/ViewModels/movies';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MoviesServiceService } from 'src/app/Services/movies-service.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  popularMoviesList: Movies[] | any = [];
  topRateMoviesList:Movies[]|any=[];
  constructor(private db: AngularFirestore, private router:Router , private popularMovieService:MoviesServiceService) {
    this.retrievePopularMovies();
    this.retrieveTopRatedrMovies();
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

  ///////////////////// Function To retrieve TopRatedMovie /////////////////

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

  ///////////////// Function To Go to details ////////////////

 goMoviedetails(idPopularMovie:string){
      this.router.navigate(['/movie/'+(idPopularMovie)]);
    }

   
    goTopMoviedetails(idTopRatedMovie:string){
      this.router.navigate(['/topRateMovie/'+(idTopRatedMovie)])
    }
}


