import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account: any;
  @Input() id: any;
  @Output() statusChanged = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  onSetTo = (status: string) => {
    console.log(this.id)
    this.statusChanged.emit({ id: this.id, newStatus:status})
  }
}
