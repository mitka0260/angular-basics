import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  e: number = Math.E;
  str = 'hello world';
  // date: Date = new Date();
  float = 0.42;
  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  };

  posts: Post[] = [
    {title: 'Beer', text: 'Best beer in the world'},
    {title: 'Bread', text: 'the best bread in the world'},
    {title: 'JavaScript', text: 'Best language in the world'}
  ];

  search = '';
  searchField = 'title';

  addPost(): void {
    this.posts.unshift({
      title: 'Angular 8',
      text: 'John likes Angular'
    });
  }

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, 4000);
  });

  date$: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  date: Date;
  ngOnInit(): void {
    this.date$.subscribe(date => {
      this.date = date;
    });
  }

}
