import { Component, ContentChild, OnInit } from '@angular/core';
import { SeverModel } from '../server.model';
import { LifeCycleModel } from './life-cycle-model';

@Component({
  selector: 'app-component-deep-dive',
  templateUrl: './component-deep-dive.component.html',
  styleUrls: ['./component-deep-dive.component.css']
})
export class ComponentDeepDiveComponent implements OnInit {

  serverElements: SeverModel[] = [new SeverModel('server', 'server', 'server'), new SeverModel('blueprint', 'blueprint', 'blueprint')];
  cycles: LifeCycleModel[] = [new LifeCycleModel('Constructor', '1')];
  @ContentChild('contentChildLocalReferance') contentChildLocalReferance: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  onServerAdded(serverData: {serverName:string,serverContent:string}) {
    this.serverElements.push(new SeverModel('server', serverData.serverName, serverData.serverContent));
  }

  onBlueprintAdded(bluePrintData:{bluePrintName:string,bluePrintContent:string}) {
    this.serverElements.push(new SeverModel('blueprint', bluePrintData.bluePrintName, bluePrintData.bluePrintContent));
  }
 
  onAddNewLifeCycle(lifeCycle: { cycleName: string, cycleOrder: string }) {
    this.cycles.push(new LifeCycleModel(lifeCycle.cycleName, lifeCycle.cycleOrder))
  }

  onchangeFrist() {
    this.cycles[0].cycleName = "Huups";
  }

  onDesrtoyFrist() {
    this.cycles.splice(0, 1);
  }
}
