import { Component, Input } from '@angular/core';
import { TodoItem } from '../../modules/todo';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todoInfo: TodoItem = { date: new Date(), isChecked: true, title: '' };
}
