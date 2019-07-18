import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article/article';
import { ArticleService } from '../service/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.css']
})
export class ListeArticleComponent implements OnInit {

  @Input() article: Article;

  constructor(private route : ActivatedRoute, private serviceArticle : ArticleService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      let id = parseInt(param.get('id'));
      this.serviceArticle.getArticleByIdJson(id).subscribe(data => this.article = data);
    });
  }
}
