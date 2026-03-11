import { inject, Injectable } from '@angular/core';
import { TodoItem } from '../modules/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private http = inject(HttpClient);

  createTodo(body: TodoItem) {
    return this.http.post<TodoItem>('http://localhost:3000/todos', body);
  }

  getTodos() {
    return this.http.get<TodoItem[]>('http://localhost:3000/todos');
  }
  deleteTodo(id: string) {
    return this.http.delete(`http://localhost:3000/todos/${id}`);
  }
}
