import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/shared/models/Movie';
import { Genre } from 'src/app/shared/models/Genre';
import { Trailer} from 'src/app/shared/models/Trailer';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie!:Movie;
  genres!:Genre[];
  trailers!:Trailer[];
  constructor(private activeRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      p=>{
        const id = Number(p.get('id'));
        this.movieService.getMovieDetails(id).subscribe(m=>{
          this.movie=m;
          console.log(this.movie);
        })
      }

    )
  }

}
