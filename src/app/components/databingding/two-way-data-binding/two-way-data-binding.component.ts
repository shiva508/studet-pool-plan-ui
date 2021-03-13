import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {
  serviceName: string = '';
  serviceNameTwoWayBinding: string = 'Server';
  constructor() { }

  ngOnInit(): void {
  }
  onTypeInputData(event:Event) {
    console.log((<HTMLInputElement>event.target).value)
    this.serviceName = (<HTMLInputElement>event.target).value
  }
}
