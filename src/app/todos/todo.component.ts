import { Component, signal } from '@angular/core';
import { Todo } from '../model/todo.type';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todoItems = signal<Array<Todo>>([
    { id: 1, task: "task 1", completed: false },
    { id: 2, task: "task 2", completed: true },
    { id: 3, task: "task 3", completed: false }
  ]);
  todoValue = signal('');

  addTodo() {
    const newTask = this.todoValue().trim();
    if (newTask) {
      const newTodo: Todo = {
        id: Date.now(),
        task: this.todoValue(),
        completed: false
      }
      this.todoItems.update(items => [...items, newTodo]);
      this.todoValue.set('');
    }
  }
  delTodo(id: number): void {
    this.todoItems.update(todos => todos.filter(todo => todo.id !== id));
  }
}
