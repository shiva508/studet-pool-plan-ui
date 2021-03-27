import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountServiceService } from '../../service/account-service.service';
import { LoggingServiceService } from '../../service/logging-service.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingServiceService]
})
export class AccountComponent implements OnInit {
  @Input() account: any;
  @Input() id: any;
  // @Output() statusChanged = new EventEmitter<any>()
  constructor(private accountServiceService: AccountServiceService, private loggingServiceService: LoggingServiceService) { }

  ngOnInit(): void {
  }
  onSetTo = (status: string) => {
    console.log(this.id);
    this.loggingServiceService.logStatusChanges(status)
    this.accountServiceService.statusUpdated.emit(status)
    this.accountServiceService.onStatusChanged({ id: this.id, newStatus: status });
    // this.statusChanged.emit({ id: this.id, newStatus:status})
  }
}
