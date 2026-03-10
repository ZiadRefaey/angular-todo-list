import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-page',
  standalone: false,
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css',
  host: {
    class: 'w-full max-w-2xl overflow-y-hidden flex-1 mx-auto py-4 gap-2 flex flex-col',
  },
})
export class TodoPageComponent {}
