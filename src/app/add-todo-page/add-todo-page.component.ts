import { Component } from '@angular/core';

@Component({
  selector: 'app-add-todo-page',
  standalone: false,
  templateUrl: './add-todo-page.component.html',
  styleUrl: './add-todo-page.component.css',
  host: {
    class: 'w-full min-h-full flex-1 max-w-md border-l border-r border-primary-dark p-4',
  },
})
export class AddTodoPageComponent {}
