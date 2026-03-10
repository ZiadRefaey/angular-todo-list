import { Component, inject } from '@angular/core';
import { ToDoService } from '../../services/to-do-service.service';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  host: {
    class: '',
  },
})
export class TodoListComponent {
  private todosSerice = inject(ToDoService);
  get todoList() {
    return this.todosSerice.todoList;
  }
  createTodo() {
    // this.http.post('', { title: 'make one billion dollars', date: new Date(), isChecked: false });
    this.todosSerice
      .createTodo({
        title: 'make one billion dollars',
        date: new Date(),
        isChecked: false,
      })
      .subscribe({
        next: (res) => {
          console.log('todo added', res);
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
