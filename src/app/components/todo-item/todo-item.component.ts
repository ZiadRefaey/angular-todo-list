import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TodoItem } from '../../modules/todo';
import { ToDoService } from '../../services/to-do-service.service';

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
  todoService = inject(ToDoService);
  @Output() delete = new EventEmitter<TodoItem>();
  @Output() check = new EventEmitter<TodoItem>();
  @Input() todoInfo: TodoItem = {
    date: new Date(),
    isChecked: true,
    title: '',
    details: '',
    priority: 'LOW',
    id: '',
  };
  checkTodo() {
    this.check.emit(this.todoInfo);
  }
  deleteTodo(id: string) {
    // console.log(this.todoInfo);
    this.delete.emit(this.todoInfo);
  }
}
