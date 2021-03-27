import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from '../service/account-service.service';
import { LoggingServiceService } from '../service/logging-service.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
  providers: [LoggingServiceService, AccountServiceService]
})
export class AccountListComponent implements OnInit {
  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];
  accounts: {name:string,status:string}[]= [];
  constructor(private loggingServiceService: LoggingServiceService, private accountServiceService: AccountServiceService) { }

  ngOnInit(): void {
    this.accounts=this.accountServiceService.accounts
  }
  onStatusChanged = (updateInfo: { id: number, newStatus: string }) => {
    this.accountServiceService.onStatusChanged(updateInfo);
    // this.accounts[updateInfo.id].status = updateInfo.newStatus;
    // console.log('Status has changes:' + updateInfo.newStatus);
    // this.loggingServiceService.logStatusChanges(updateInfo.newStatus)
  }
  onAccountAdded = (newAccount: {name:string,status:string}) => {
    // this.accounts.push(newAccount);
    this.accountServiceService.onAccountAdded(newAccount);
  }

}
