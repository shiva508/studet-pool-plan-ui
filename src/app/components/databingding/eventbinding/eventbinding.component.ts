import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  allowServiceCreation: boolean = false;
  serviceCreationStatus: string = "No Service is Created";
  constructor() {
    setTimeout(() => {
      this.allowServiceCreation = true;
    }, 2000);

  }

  ngOnInit(): void {
  }

  createNewServiceFun() {
    this.serviceCreationStatus = 'Service Was Created';
  }
}
