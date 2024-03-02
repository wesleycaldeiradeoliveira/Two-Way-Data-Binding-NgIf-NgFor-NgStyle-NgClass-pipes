import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
     // text: string = 'Wesley';
   pessoa = { name: 'Wesley', status: 1 };
   pesso2 = { name: 'Dayla', status: 2 };
   pesso3 = { name: 'Neuza', status: 3 };
 }
 
