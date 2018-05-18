import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../../service/articles.service';
import {Article} from '../../model/article';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  providers: [ArticlesService],
})
export class ArticleDetailComponent implements OnInit {

  public favorite: Article;
  public let; favorites = [];
  constructor(

  private articlesService: ArticlesService,
  private _route: ActivatedRoute,
  private _router: Router

  ) { }

  ngOnInit() {

    console.log('producto-detail.Component.ts cargado...');
    this.favorites = this.articlesService.getFavorites();
    console.log(this.favorites);
    this._route.params.forEach((params: Params) => {

      const id = params['id'];

      this.articlesService.getArticle(id).subscribe(

        result => {
          // Se retorna el articulo desde api-news
          this.favorite = this.favorites[id];
          console.log(this.favorites[id]);
        }
      );

    };

  }

}

