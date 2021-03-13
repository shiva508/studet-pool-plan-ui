import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicparcice',
  templateUrl: './basicparcice.component.html',
  styleUrls: ['./basicparcice.component.css'],
  styles: [`
            h1 {
               color: fuchsia;
              }`
  ]
})
export class BasicparciceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
