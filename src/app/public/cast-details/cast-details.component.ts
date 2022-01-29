import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CastService } from 'src/app/core/services/cast.service';
import { CastDetails } from 'src/app/shared/models/CastDetails';
import { MovieCard } from 'src/app/shared/models/MovieCard';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit { 
  castDetails!:CastDetails;
  constructor(private activeRoute: ActivatedRoute, private castService: CastService) {


   }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      p=>{
        const id = Number(p.get('id'));
        this.castService.getCastDetails(id).subscribe(
          m=>{this.castDetails =m;

            console.log(this.castDetails);
          console.log("why");
          console.log(this.castDetails.id);
          console.log(this.castDetails.movieTitle);
          
          });
          // console.log(this.castDetails);
          // console.log(this.castDetails.movies);
          
          
      })
    }
    
             
        
}

