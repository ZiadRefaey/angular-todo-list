import { Component, inject, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do-service.service';
import { TodoItem } from '../../modules/todo';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  private todosSerice = inject(ToDoService);
  todoList: TodoItem[] = [];
  ngOnInit(): void {
    this.todosSerice.getTodos().subscribe({
      next: (value) => {
        this.todoList = value;
        console.log(value);
      },
      complete: () => {
        console.log('isComplete');
      },
    });
  }

  displayTodos() {
    this.todosSerice.getTodos().subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
  deleteTodo(id: string) {
    this.todosSerice.deleteTodo(id).subscribe({
      next: (res) => {
        console.log('successfully deleted', res);
      },
    });
  }
}
