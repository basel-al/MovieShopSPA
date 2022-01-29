import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { MovieCard } from '../../models/MovieCard';


@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  movieCards!: MovieCard[];
  constructor(private activeRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {

    this.activeRoute.paramMap.subscribe
    (
      p=>{
        const id = Number(p.get('id'));
        this.movieService.getMoviesForGenre(id).subscribe
        (
          m=>{this.movieCards=m;}
        )
        }
    );
          
  }
}
