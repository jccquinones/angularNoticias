import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  constructor() { }

  url: string = 'https://newsapi.org/v2/everything?sources=fox-sports&apiKey=cba39468354343df9cb21c0666a1c59a';

  ngOnInit(){
    console.log('success');
  }

  getUrl(){
    return this.url;
  }
}
