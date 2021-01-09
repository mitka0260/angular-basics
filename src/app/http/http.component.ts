import { Component, OnInit } from '@angular/core';
import {Todo, TodosService} from './todos.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  todos: Todo[] = [];
  loading = false;
  todoTitle = '';
  error = '';

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    // ангуляр оборачивает это в rxjs-стримы - здесь он регистрирует запрос, нео не выполняет его, нужен слушатель
    // this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
    //   .subscribe(todos => {
    //     console.log('Response: ', todos);
    //     this.todos = todos;
    //   });
    this.fetchTodos();
  }

  addTodo(): void {
    if (!this.todoTitle.trim()) {
      return;
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    };
    this.todosService.addTodo(newTodo)   // возвращает стрим
      .subscribe(todo => {
        // console.log('todo: ', todo);
        this.todos.push(todo);
        this.todoTitle = '';
      });
  }

  fetchTodos(): void {
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe(todos => {
        this.todos = todos;
        this.loading = false;
      }, error => {
        console.log(error.message);
        this.error = error.message;
      });
  }

  removeTodo(id: number): void {
    this.todosService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !== id);
      });
  }

  completeTodo(id: number) {
    this.todosService.completeTodo(id).subscribe(todo => {
      // console.log(todo);
      // todo = JSON.parse(todo);
      this.todos.find(t => t.id === todo.id).completed = true;
    });
  }
}
