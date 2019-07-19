import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Widget1Component } from './widget1/widget1.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GestionArticleComponent } from './gestion-article/gestion-article.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { LoginComponent } from './login/login.component';
import { CategorieComponent } from './liste-categorie/categorie.component';

const appRoutes: Routes = [
    { path : 'gestionArticle', component : GestionArticleComponent,
    children: [
      { path: '', component: Widget1Component, outlet: 'widget1' },
      { path: ':id', component: DetailArticleComponent, outlet: 'detail' }]
    },
    { path : 'gestionArticle', component : GestionArticleComponent,
    children: [
      { path: '', component: ListeArticleComponent, outlet: 'liste' },
      { path: ':id', component: ListeArticleComponent, outlet: 'liste' }]
    },
    { path: 'login', component: LoginComponent},
    { path: 'categorie', component: CategorieComponent},
    { path: 'ajouter-article', component: AjouterArticleComponent},
    { path : 'widget1', component : Widget1Component },
    { path : 'detail-article', component : DetailArticleComponent},
    { path : '', component : AccueilComponent},
    {path : '**', component : AccueilComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }