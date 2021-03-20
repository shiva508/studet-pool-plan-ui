import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-component',
  templateUrl: './number-component.component.html',
  styleUrls: ['./number-component.component.css']
})
export class NumberComponentComponent implements OnInit {
  numberArray = [1, 2, 3, 4];
  oddNumberArray = [1, 3, 5];
  eventNumberArray = [2, 4, 6];
  onlyAdd = false;
  constructor() { }

  ngOnInit(): void {
  }

}
