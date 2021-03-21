import { Component, OnInit,Output,EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<any>();
  @ViewChild('accountName', { static: true }) accountName: any;
  @ViewChild('status', { static: true }) status: any;
  constructor() { }

  ngOnInit(): void {

  }
  onCreateAccount(name: string, status:string) {
    // console.log(this.accountName.nativeElement.value);
    // const name = this.accountName.nativeElement.value;
    // const status = this.status.nativeElement.value;
    this.accountAdded.emit({ name: name, status: status});
  }
}
