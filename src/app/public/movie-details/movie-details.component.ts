import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/shared/models/Movie';
import { Genre } from 'src/app/shared/models/Genre';
import { Trailer} from 'src/app/shared/models/Trailer';
import { TmplAstRecursiveVisitor } from '@angular/compiler';

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
          this.movie.rating = parseFloat(this.movie.rating.toFixed(2));
          this.movie.price
          console.log(this.movie);
          
        })
      }
      

    )
  }
  GetRatingColor(rating: number)
  {
    if(rating>=8)
    {
      return{'bg-success':true};
    }
    else if(rating<8 && rating >= 7)
    {
      return{'bg-warning':true} ;
    }
    else if(rating<7)
    {
      return{'bg-danger':true} ;
    }
      return{'bg-secondary':true};
    
  }
  GetMoneyString(dollars : number)
  {
    return dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
  GetDateString(date : string)
  {
    return date.substring(5,7)+"/"+date.substring(8,10)+"/"+date.substring(0,4)
  }
  




}
