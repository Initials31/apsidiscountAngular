import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article/article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.css']
})
export class ListeArticleComponent implements OnInit {

  listeArticleBis : Article[];
  message : string;
  identifiant : number;
  stock : number;

  constructor(private articleService : ArticleService) { }

  ngOnInit() {
    this.listeArticleBis = null;
    this.message = 'Pas d\'article dans la liste';
  }

  private listerArticles() {
    this.articleService.getAllArticlesJson().subscribe(data => {
      this.listeArticleBis = data;
    });
  }

  afficherStock0() {
    this.listeArticleBis= [];
    this.articleService.getOnlyStockJson().subscribe(stck => {
      this.listeArticleBis = stck;
    });
    this.message = '';
  }

  afficherTout() {
    this.listeArticleBis = [];
    this.articleService.getAllArticlesJson().subscribe(art => {
      this.listeArticleBis = art;
      this.listerArticles;
    });
  }

  // affficherById() {
  //   if (this.identifiant) this.identifiant=this.identifiant;
  //   this.listeArticleBis = [];
  //   this.articleService.getArticleById(this.identifiant).subscribe(id =>
  //     this.listeArticleBis.push(id));
  //   this.identifiant = null;
  // }

  afficherRien () {
    this.listeArticleBis = null;
    this.message = 'Pas d\'article dans la liste';
  }
}
