import { Injectable } from '@angular/core';
import { Article } from '../article/article';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    return this.http.get<Article[]>(`${this.baseURL}/articles`, this.httpOptions);
  }

  // getAllArticle() : Observable<Article> {
  //   return from(ARTICLES);
  // }

  getArticleByIdJson(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.baseURL}/articles/${id}`, this.httpOptions);
  }

  // getArticleById(identifiant: number): Observable<Article> {
  //   let $monObservable = this.getAllArticle().pipe (
  //     filter(art => art.id === identifiant)
  //   );
  //   return $monObservable;
  // }


  getOnlyStockJson(): Observable<Article[]> {
    return this.getAllArticlesJson().pipe(map(tabart => tabart.filter(art => art.stock > 0)));
  }

  // getOnlyStock(): Observable<Article> {
  //   let $monObservable = this.getAllArticleJson().pipe (
  //     filter(art => art.stock > 0)
  //   );
  //   return $monObservable;
  // }

  supprimerArticleJson(id: number): Observable<Article> {
    return this.http.delete<Article>(`${this.baseURL}/articles/${id}`,this.httpOptions);
  }

  addArticleJson(article: Article): Observable<Article>{
    return this.http.post<Article>(`${this.baseURL}/articles`, article, this.httpOptions);
  }
}
