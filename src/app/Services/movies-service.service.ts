import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movies } from '../ViewModels/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  MoviesList: AngularFirestoreCollection<Movies>;
  TopRatedMoviesList:AngularFirestoreCollection<Movies>

 
  MovieObseravable: Observable<Movies[]>

  private dbPath = '/PopularMovies';
  private dbPathTopRated = '/TopRatedMovies';

  constructor(private db: AngularFirestore) {
    this.MoviesList = this.db.collection(this.dbPath);
    this.TopRatedMoviesList=this.db.collection(this.dbPathTopRated)
   }

   ///get All PopularMovies ///
  getAllPopularMovies(): AngularFirestoreCollection<Movies> {
    return this.MoviesList;
  }
 ///get All TopRated Movies ///
  getAllTopRatedMovies(): AngularFirestoreCollection<Movies> {
    return this.TopRatedMoviesList;
  }

  /////////// get sorted data///////////////

  getCollection(sort : string){
    this.MoviesList = this.db.collection(this.dbPath, ref => ref.orderBy(sort, 'desc'))
    this.MovieObseravable = this.MoviesList.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Movies
          data.idcollection = a.payload.doc.id
          return data
        })
      })
    )
  }

  sortByAuthor(){
    return this.db.collection('PopularMovies', ref => 
ref.orderBy('popularity','desc'));


  }
}
