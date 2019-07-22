import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article';
import { ArticleService } from '../service/article.service';
import { Router } from '@angular/router';
import { CategorieService } from '../service/categorie.service';
import { Categorie } from '../categorie/categorie';

@Component({
  selector: 'app-widget1',
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.css']
})
export class Widget1Component implements OnInit {

  art: Article[];
  cat : Categorie[];
  message: string;
  stockSelected: number;
  typeListe: number;

  constructor(private router: Router, private serviceArticle: ArticleService, private serviceCategorie : CategorieService) { }

  ngOnInit() {
    this.serviceArticle.getAllArticlesJson().subscribe(art => {
      this.art = art;
    }
    );
    this.stockSelected = 0;
  }

  private listerArticles() {
    this.serviceArticle.getAllArticlesJson().subscribe(data => {
      this.art = data;
    });
  }

  private listerCategorie() {
    this.serviceCategorie.getAllCategoriesJson().subscribe(data => {
      this.cat=data;
    })
  }

  afficherStock0() {
    this.art= [];
    this.typeListe = 2;
    this.serviceArticle.getOnlyStockJson().subscribe(stck => {
      this.art = stck;
    });
    this.message = '';
  }

  afficherTout() {
    this.art = [];
    this.typeListe = 1;
    this.serviceArticle.getAllArticlesJson().subscribe(art => {
      this.art = art;
      this.listerArticles;
    });
    this.message = '';
  }

  afficherCategories() {
    this.cat = [];
    this.serviceCategorie.getAllCategoriesJson().subscribe(cat => {
      this.cat = cat;
      this.listerCategorie;
    });
  }

  afficherRien() {
    this.art = null;
    this.message = 'Pas d\'article dans la liste';
  }

  supprimerArticle(id: number) {
    this.serviceArticle.supprimerArticleJson(id).subscribe(
      value => {
        switch (this.typeListe) {
          case 1: this.afficherTout();
          case 2: this.afficherStock0();
          default: this.art = null;
        }},
    );       
    err => this.message = 'Erreur lors de la suppression'
  }

  selectArticle(article : Article){
    console.log('selectArticle : id =' + article.id);
    let link=['/gestionArticle', {outlets: {'liste': [article.id]}}];
    this.router.navigate(link);

  }

  selectArticleByCategorieId(id: number){
    this.serviceArticle.getArticleByCategorieId(id).subscribe(data => {
      this.art =data;
    });
  }
}
