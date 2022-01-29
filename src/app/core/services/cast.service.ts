import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cast } from 'src/app/shared/models/Cast';
import { MovieCard } from 'src/app/shared/models/MovieCard';
import { CastDetails } from 'src/app/shared/models/CastDetails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http: HttpClient) { }

  getCastDetails(id: number): Observable<CastDetails>  {
    return this.http.get<CastDetails>(`${environment.apiBaseUrl}Cast/${id}`);
    
  }
  // getCastCards(id: number): Observable<MovieCard[]>{
  //   return  this.http.get<MovieCard[]>(`${environment.apiBaseUrl}Cast/${id}`);
  // }

}
