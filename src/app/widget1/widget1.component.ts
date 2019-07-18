import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article';
import { ArticleService } from '../service/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-widget1',
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.css']
})
export class Widget1Component implements OnInit {

  widget1: Article[];
  message: string;
  stockSelected: number;
  typeListe: number;

  constructor(private router: Router, private serviceArticle: ArticleService) { }

  ngOnInit() {
    this.serviceArticle.getAllArticlesJson().subscribe(art => {
      this.widget1 = art;
    }
    );
    this.stockSelected = 0;
  }

  private listerArticles() {
    this.serviceArticle.getAllArticlesJson().subscribe(data => {
      this.widget1 = data;
    });
  }

  afficherStock0() {
    this.widget1= [];
    this.typeListe = 2;
    this.serviceArticle.getOnlyStockJson().subscribe(stck => {
      this.widget1 = stck;
    });
    this.message = '';
  }

  afficherTout() {
    this.widget1 = [];
    this.typeListe = 1;
    this.serviceArticle.getAllArticlesJson().subscribe(art => {
      this.widget1 = art;
      this.listerArticles;
    });
    this.message = '';
  }

  afficherRien() {
    this.widget1 = null;
    this.message = 'Pas d\'article dans la liste';
  }

  supprimerArticle(id: number) {
    this.serviceArticle.supprimerArticleJson(id).subscribe(
      value => {
        switch (this.typeListe) {
          case 1: this.afficherTout();
          case 2: this.afficherStock0();
          default: this.widget1 = null;
        }},
    );       
    err => this.message = 'Erreur lors de la suppression'
  }

  selectArticle(art: Article){
    console.log('selectArticle : id =' + art.id);
    let link=['/gestionArticle', {outlets: {'detail': [art.id]}}];
    this.router.navigate(link);

  }
}
