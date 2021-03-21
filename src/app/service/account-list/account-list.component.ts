import { Component, OnInit } from '@angular/core';
import { LoggingServiceService } from '../service/logging-service.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingServiceService: LoggingServiceService) { }

  ngOnInit(): void {
  }
  onStatusChanged = (updateInfo: {id:number,newStatus:string}) => {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    console.log('Status has changes:' + updateInfo.newStatus);
    this.loggingServiceService.logStatusChanges(updateInfo.newStatus)
  }
  onAccountAdded = (newAccount: {name:string,status:string}) => {
    this.accounts.push(newAccount);
  }

}
