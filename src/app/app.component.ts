import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  personSelectedIndex: number | undefined;
  listPeople = [
    { name: 'Wesley Caldeira', age: 29 },
    { name: 'Dayla', age: 25 },
    { name: 'Miguel', age: 8 },
    { name: 'Reinaldo', age: 59 },
    { name: 'Neuza', age: 50 }
  ];

  selectPerson(index: number) {
    this.personSelectedIndex = index;
  }
}


  


