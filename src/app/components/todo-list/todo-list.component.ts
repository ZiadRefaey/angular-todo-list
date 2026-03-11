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
      },
    });
  }
  onDelete(deletedItem: TodoItem) {
    const previousTodos = this.todoList;
    this.todoList = this.todoList.filter((t) => t !== deletedItem);
    this.todosSerice.deleteTodo(deletedItem.id).subscribe({
      error: (err) => {
        console.log('Something went wrong', err);
        this.todoList = previousTodos;
      },
    });
  }
  onCheck(checkedTodo: TodoItem) {
    const previousTodos = this.todoList;
    this.todoList = this.todoList.map((todo) => {
      if (todo.id == checkedTodo.id) return { ...todo, isChecked: !todo.isChecked };
      else return todo;
    });
    // console.log(this.todoList);
    this.todosSerice.updateTodo({ ...checkedTodo, isChecked: !checkedTodo.isChecked }).subscribe({
      error: (err) => {
        console.log('something went wrong', err);
        this.todoList = previousTodos;
      },
    });
  }
}
