import { EventEmitter, Injectable } from '@angular/core';
import { LoggingServiceService } from './logging-service.service';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  
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

  statusUpdated = new EventEmitter<string>();
  constructor(private loggingServiceService: LoggingServiceService) { }

  onStatusChanged = (updateInfo: { id: number, newStatus: string }) => {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    console.log('Status has changes:' + updateInfo.newStatus);
  }

  onAccountAdded = (newAccount: { name: string, status: string }) => {
    this.accounts.push(newAccount);
  }

  getAllAccounts = () => {
    return this.accounts;
  }

}
