import { Pipe, PipeTransform } from '@angular/core';
import {Post} from './pipes.component';

@Pipe({
  name: 'filter',
  pure: false   // менее оптимизоровано, но если что-то есть в поле поиска, то при добавлении поста, он его отобразит
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', field: string = 'title'): Post[] {
    if (!search.trim()) {
      return posts;
    }
    return posts.filter(post => {
      return post[field].toLowerCase().includes(search.toLowerCase());
    });
  }

}
