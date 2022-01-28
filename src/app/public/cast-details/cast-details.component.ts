import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CastService } from 'src/app/core/services/cast.service';
import { Cast } from 'src/app/shared/models/Cast';
import { MovieCard } from 'src/app/shared/models/MovieCard';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit { 
  cast!:Cast;
  movieCards!: MovieCard[];
  constructor(private activeRoute: ActivatedRoute, private castService: CastService) {


   }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      p=>{
        const id = Number(p.get('id'));
        this.castService.getCastDetails(id).subscribe(
          m=>{this.cast =m;});
        
      })
    }
             
        
}

