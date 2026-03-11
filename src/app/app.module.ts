import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { heroTrash, heroCheck, heroPencil } from '@ng-icons/heroicons/outline';
import { provideRouter } from '@angular/router';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { AddTodoPageComponent } from './add-todo-page/add-todo-page.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    App,
    TodoListComponent,
    TodoItemComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    TodoPageComponent,
    AddTodoPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ heroTrash, heroCheck, heroPencil }),
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([
      {
        path: '',
        component: TodoPageComponent,
        title: 'Todo List',
      },
      {
        path: 'add-todo',
        component: AddTodoPageComponent,
        title: 'Add Todo',
      },
    ]),
  ],
  bootstrap: [App],
})
export class AppModule {}
