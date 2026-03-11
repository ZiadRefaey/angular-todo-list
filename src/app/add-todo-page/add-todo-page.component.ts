import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToDoService } from '../services/to-do-service.service';
import { TodoItem } from '../modules/todo';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-todo-page',
  standalone: false,
  templateUrl: './add-todo-page.component.html',
  styleUrl: './add-todo-page.component.css',
  host: {
    class: 'w-full min-h-full flex-1 max-w-md border-l border-r border-primary-dark p-4',
  },
})
export class AddTodoPageComponent {
  router = inject(Router);
  toDoService = inject(ToDoService);
  addTodo = new FormGroup({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    details: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    priority: new FormControl<'LOW' | 'MEDIUM' | 'HIGH'>('LOW', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });
  title = this.addTodo.controls.title;
  details = this.addTodo.controls.details;
  get priority() {
    return this.addTodo.get('priority')! as FormControl<'LOW' | 'MEDIUM' | 'HIGH'>;
  }
  onSubmit() {
    if (this.addTodo.valid) {
      const createdTodo: TodoItem = {
        ...this.addTodo.getRawValue(),
        date: new Date(),
        isChecked: false,
        id: crypto.randomUUID(),
      };

      this.toDoService.createTodo(createdTodo).subscribe({
        complete: () => {
          console.log('Task has been created');
          this.router.navigate(['']);
        },
      });
    }
  }
}
