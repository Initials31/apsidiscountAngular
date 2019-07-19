import { Injectable } from '@angular/core';
import { Article } from '../article/article';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categorie } from '../categorie/categorie';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  baseURL = 'http://localhost:8081/apsidiscountweb/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAllArticlesJson(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.baseURL}/article`, this.httpOptions);
  }

  getArticleByIdJson(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.baseURL}/article/${id}`, this.httpOptions);
  }

  getOnlyStockJson(): Observable<Article[]> {
    return this.getAllArticlesJson().pipe(map(tabart => tabart.filter(art => art.stock > 0)));
  }

  supprimerArticleJson(id: number): Observable<Article> {
    return this.http.delete<Article>(`${this.baseURL}/article/${id}`,this.httpOptions);
  }

  addArticleJson(article: Article): Observable<Article>{
    return this.http.post<Article>(`${this.baseURL}/article`, article, this.httpOptions);
  }

  getArticleByCategorieId (id: number): Observable<Article> {
    return this.http.get<Article>(`${this.baseURL}/article/categorie/{id}`, this.httpOptions);
  }

}
