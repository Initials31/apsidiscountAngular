import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { Widget1Component } from './widget1/widget1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DirectiveListeDirective } from './directive/directive-liste.directive';
import { ArticleService } from './service/article.service';
import { GestionArticleComponent } from './gestion-article/gestion-article.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { CategorieComponent } from './liste-categorie/categorie.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailArticleComponent,
    ListeArticleComponent,
    Widget1Component,
    NavbarComponent,
    DirectiveListeDirective,
    GestionArticleComponent,
    AccueilComponent,
    AjouterArticleComponent,
    CategorieComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
