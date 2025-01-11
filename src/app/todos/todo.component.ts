import { Component, output, signal } from '@angular/core';
import { Todo } from '../model/todo.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todoItems = signal<Array<Todo>>([]);
  todoValue = signal('');

  addTodo(todo: Todo){
    this.todoItems().push(todo);
  }
}
