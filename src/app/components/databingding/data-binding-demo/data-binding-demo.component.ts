import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.css']
})
export class DataBindingDemoComponent implements OnInit {
  enableMultipleChoise: boolean = false;
  emailInput: string = '@gmail.com';
  constructor() { }

  ngOnInit(): void {
  }

  enableMultipleChoiseFun() {
    this.enableMultipleChoise = !this.enableMultipleChoise;
  }
}
