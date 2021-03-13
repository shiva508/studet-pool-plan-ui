import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {

  serviceId: number = 508;
  serviceName: string = 'student-plan-service';
  serviceStatus: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  serviceStatusFunction() {
    this.serviceStatus='Good'
    return this.serviceStatus;
  }

}
