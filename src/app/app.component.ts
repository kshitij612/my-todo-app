import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TodoComponent } from './todos/todo.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-todo-list';
}
 