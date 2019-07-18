import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article/article';
import { ARTICLES } from '../article/article-moks';
import { ArticleService } from '../service/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  @Input() article: Article;
  alignement: string;
  disabledPrecedent : boolean;
  disabledSuivant : boolean;
  cpt : number;

  constructor(private route : ActivatedRoute, private serviceArticle : ArticleService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      let id = parseInt(param.get('id'));
      this.serviceArticle.getArticleByIdJson(id).subscribe(data => this.article = data);
    });
      // this.faireAlignement();
  }


  // private faireAlignement() {
  //   this.alignement = 'center';
  //   if (this.article.prix < 15) {
  //     this.alignement = 'left';
  //   }
  // }

  // public modifierPrix() {
  //   this.article.prix = this.article.prix + 5;
  //   this.article.stock--;
  //   // this.faireAlignement();
  // }

  // public precedent() {;
  //   this.cpt--;
  //   this.gererBoutonNav();
  //   this.article = ARTICLES[this.cpt -1];
  // }
 
  //  public suivant() {
  //    this.cpt++;
  //   this.gererBoutonNav();
  //   this.article = ARTICLES[this.cpt-1];
  //   }

  // private gererBoutonNav(){
  //   if (this.cpt === ARTICLES.length) {
  //     this.disabledSuivant = true;
  //   }
  //   else {this.disabledSuivant= false;}

  //   if (this.cpt ===1) {
  //     this.disabledPrecedent = true;
  //   }
  //   else {this.disabledPrecedent = false;}
  // }

  // public afficherStock() {
  //   console.log(' le stock dans le composant est de :' + this.article.stock);
  // }
}