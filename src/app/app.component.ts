import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  host: {
    class: 'w-full min-h-screen bg-background flex items-center justify-between flex-col',
  },
})
export class App {
  protected readonly title = signal('day-02');
}
