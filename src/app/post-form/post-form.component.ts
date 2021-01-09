import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('titleInput', {static: false}) inputRef!: ElementRef;
  // true - если хотим обратиться к inputRef в методе ngOnInit()
  // начиная с 9ой версии Ангуляра этого второго аргумента больше будет не надо

  title = '';
  text = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  addPost(): void {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      };
      this.onAdd.emit(post);    // метод для отправки данных наружу
      // console.log('New post: ', post);
      this.title = this.text = '';
    }
  }

  focusTitle(): void {
    console.log(this.inputRef);
    this.inputRef.nativeElement.focus();
  }

}
