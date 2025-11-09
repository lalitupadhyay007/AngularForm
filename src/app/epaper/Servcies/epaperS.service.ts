import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EpaperComponent } from '../Epaper.component';
import { from, Observable } from 'rxjs';
import { ApiResponse } from '../../Model/api-response.model';
import { Epaper } from '../../Model/EpaperModel.model';


@Injectable({
  providedIn: 'root'
})
export class EpaperService {

  private baseUrl = 'https://localhost:44357/api/Login/api/create';

  constructor(private http: HttpClient)
  {}

   createEpaper(epaper: Epaper): Observable<ApiResponse<number>> {
    return this.http.post<ApiResponse<number>>(`${this.baseUrl}/Create`, epaper); 
}
}