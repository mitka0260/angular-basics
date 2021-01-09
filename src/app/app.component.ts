import {Component, OnInit} from '@angular/core';

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

export class AppComponent implements OnInit {
 // title = 'angular-basics';
  posts: Post[] = [
    {title: 'Want to learn Angular Components', text: 'I still learn components', id: 1},
    {title: 'Next part of Angular Components', text: 'This part is about directives and pipes', id: 2}
  ];

  ngOnInit(): void {
    setTimeout(() => {
      // console.log('Timeout');
      // this.posts[0].title = 'Changed';   // не сработает из-за стратегии changeDetection: ChangeDetectionStrategy.OnPush
      this.posts[0] = {                     // изменилась ссылка на объект, а не содержимое объекта
        title: 'Changed',
        text: 'Changed text 2',
        id: 33
      };
    }, 5000);
  }

  updatePosts(post: Post): void {
    this.posts.unshift(post);
    // console.log('Post: ', post);
  }

  removePost(id: number): void {
    console.log('Id to remove: ', id);
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
