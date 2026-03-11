import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToDoService } from '../../services/to-do-service.service';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  todoService = inject(ToDoService);
  search = new FormControl('');
  @Output() searchOutput = new EventEmitter();
  onChange() {
    this.searchOutput.emit(this.search.value);
  }
}
