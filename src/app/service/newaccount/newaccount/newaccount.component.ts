import { Component, OnInit,Output,EventEmitter, ViewChild } from '@angular/core';
import { AccountServiceService } from '../../service/account-service.service';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent implements OnInit {
  // @Output() accountAdded = new EventEmitter<any>();
  @ViewChild('accountName', { static: true }) accountName: any;
  @ViewChild('status', { static: true }) status: any;

  constructor(private accountServiceService: AccountServiceService) {
    this.accountServiceService.statusUpdated.subscribe((status: string) => {
      alert('Updated Status :'+status)
    })
  }

  ngOnInit(): void {

  }
  onCreateAccount(name: string, status:string) {
    // console.log(this.accountName.nativeElement.value);
    // const name = this.accountName.nativeElement.value;
    // const status = this.status.nativeElement.value;
    this.accountServiceService.onAccountAdded({ name: name, status: status })
    //this.accountAdded.emit({ name: name, status: status});
  }
}
