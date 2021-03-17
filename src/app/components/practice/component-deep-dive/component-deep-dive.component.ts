import { Component, OnInit } from '@angular/core';
import { SeverModel } from '../server.model';

@Component({
  selector: 'app-component-deep-dive',
  templateUrl: './component-deep-dive.component.html',
  styleUrls: ['./component-deep-dive.component.css']
})
export class ComponentDeepDiveComponent implements OnInit {

  serverElements: SeverModel[] = [new SeverModel('server', 'server', 'server'), new SeverModel('blueprint', 'blueprint', 'blueprint')];
  

  constructor() { }

  ngOnInit(): void {
  }

  onServerAdded(serverData: {serverName:string,serverContent:string}) {
    this.serverElements.push(new SeverModel('server', serverData.serverName, serverData.serverContent));
  }

  onBlueprintAdded(bluePrintData:{bluePrintName:string,bluePrintContent:string}) {
    this.serverElements.push(new SeverModel('blueprint', bluePrintData.bluePrintName, bluePrintData.bluePrintContent));
  }
 
}
