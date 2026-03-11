import { Component, Input } from '@angular/core';
import { TodoItem } from '../../modules/todo';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
  host: {
    class: 'w-full',
  },
})
export class TodoItemComponent {
  @Input() todoInfo: TodoItem = {
    date: new Date(),
    isChecked: true,
    title: '',
    details: '',
    priority: 'LOW',
  };
}
