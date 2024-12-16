import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fixed: Use array for 'styleUrls'
})
export class AppComponent {
  title = 'expense-tracker';
}
