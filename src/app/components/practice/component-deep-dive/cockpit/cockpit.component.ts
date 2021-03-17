import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ bluePrintName: string, bluePrintContent: string }>();
  newServerName = '';
  newServerContent = '';

  @ViewChild('localRefServerCOntent', { static: true }) localRefServerCOntent: any;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(localReferenceServerName: HTMLInputElement) {
    console.log(localReferenceServerName.value);
    console.log(this.localRefServerCOntent.nativeElement.value)
    this.serverCreated.emit(
      {
        serverName: localReferenceServerName.value,
        serverContent: this.localRefServerCOntent.nativeElement.value
      })
    // this.serverElements.push(new SeverModel('server', this.newServerName, this.newServerName));
  }

  onAddBlueprint(localReferenceServerName: HTMLInputElement) {

    this.blueprintCreated.emit(
      {
        bluePrintName: localReferenceServerName.value,
        bluePrintContent: this.localRefServerCOntent.nativeElement.value
      })
    // this.serverElements.push(new SeverModel('blueprint', this.newServerName, this.newServerName));
  }

}
