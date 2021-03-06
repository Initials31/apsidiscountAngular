import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../categorie/categorie';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  baseURL = 'http://localhost:8081/apsidiscountweb/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAllCategoriesJson(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.baseURL}/categorie`, this.httpOptions);
  }
  
}
