import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ArticlesService} from '../../service/articles.service';
import { Article} from '../../model/article';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css'],
  providers: [ArticlesService]
})

export class ArticlesListComponent implements OnInit {

  public articles: Article[];

  constructor(
    private articleService: ArticlesService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {

    this.articleService.getArticles().subscribe(

      result => {
        // se retornan los articulos desde api-news
        this.articles = result.articles;
        console.log(result.articles);
      }
    )

  }

}
