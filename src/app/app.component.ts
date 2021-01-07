import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-basics';
  posts: Post[] = [
    {title: 'Want to learn Angular Components', text: 'I still learn components', id: 1},
    {title: 'Next part of Angular Components', text: 'This part is about directives and pipes', id: 2}
  ];
}
