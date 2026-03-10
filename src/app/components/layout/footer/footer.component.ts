import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  host: {
    class: 'w-full',
  },
})
export class FooterComponent {}
