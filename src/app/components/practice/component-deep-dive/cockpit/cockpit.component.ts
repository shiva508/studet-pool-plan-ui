import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ bluePrintName: string, bluePrintContent: string }>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit(
      {
        serverName: this.newServerName,
        serverContent: this.newServerContent
      })
    // this.serverElements.push(new SeverModel('server', this.newServerName, this.newServerName));
  }

  onAddBlueprint() {
    this.blueprintCreated.emit(
      {
        bluePrintName: this.newServerName,
        bluePrintContent: this.newServerContent
      })
    // this.serverElements.push(new SeverModel('blueprint', this.newServerName, this.newServerName));
  }

}
