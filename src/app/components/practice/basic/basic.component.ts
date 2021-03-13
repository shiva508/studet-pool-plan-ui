import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
  styles: [`
    h2 {
      color: red;
  }`
]  
  
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
