import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/core/services/genre.service';
import { Genre } from 'src/app/shared/models/Genre';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  genres! : Genre[];
  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe(
      m => {
        this.genres = m;
        console.log(this.genres);
      }
    )
    
  }

}
