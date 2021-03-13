import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Nithya Plans';
  pendingTask:string = 'You stoped shiva loving you!!!!';
  
  constructor() {
    console.log("408")
  }
}
