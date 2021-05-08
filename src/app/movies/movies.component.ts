import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  // GitUsers:any = [];
  movies: any = []
  mname: any = ""

  getmovies() {
    this.movies = this.http.get<any>("http://www.omdbapi.com/?i=tt3896198&apikey=e5e74525&t=" + this.mname).subscribe(data => {
      this.movies = data;
    },
      err => {
        console.log(err);
      },
      () => {
        console.log("Data fetched successfully");
      }
    )
  }
  constructor(public http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<any>("" + this.mname).subscribe(data => {
      this.movies = data;
    },
      err => {
        console.log(err);
      },
      () => {
        console.log("Data fetched successfully");
      }
    )
  }
}