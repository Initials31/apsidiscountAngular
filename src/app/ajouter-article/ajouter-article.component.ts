import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article';
import { Router } from '@angular/router';
import { ArticleService } from '../service/article.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ArticleValidators } from './ArticleValidators';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})
export class AjouterArticleComponent implements OnInit {
  
  articleForm : FormGroup;
  designation : FormControl;
  constructeur : FormControl;
  categorie : FormControl;
  dateMiseEnLigne : FormControl;
  description : FormControl;
  stock : FormControl;
  prix : FormControl;
  image : FormControl;
  article: Article;

  constructor(private fb : FormBuilder, private router: Router, private serviceArticle: ArticleService ) { }

  ngOnInit() {
    this.designation = new FormControl('', [Validators.required,  Validators.maxLength(15)]);
    this.constructeur= new FormControl('', [Validators.required, Validators.maxLength(15)]);
    this.categorie= new FormControl('', [Validators.required, Validators.maxLength(15)]);
    this.dateMiseEnLigne= new FormControl('', [Validators.required, ArticleValidators.sortieAjd]);
    this.image = new FormControl ('', Validators.required);
    this.description = new FormControl('', [Validators.required, Validators.maxLength(250)]);
    this.stock = new FormControl ('', Validators.required);
    this.prix= new FormControl('', Validators.required);
    this.articleForm = this.fb.group ({
      designation : this.designation,
      constructeur : this.constructeur,
      categorie : this.categorie,
      dateMiseEnLigne : this.dateMiseEnLigne,
      description : this.description,
      stock : this.stock,
      prix : this.prix
    });
  }

  onSubmit(user: Article) {
    console.log(user.designation);
    console.log(user.dateMiseEnLigne);
    this.serviceArticle.addArticleJson(user).subscribe(
      data => {
        this.article = data;
        console.log(this.article.id);
      },
      err => console.log("Erreur lors de la création de l'article'"));

      let link =['/widget1'];
      this.router.navigate(link);
  }
}
