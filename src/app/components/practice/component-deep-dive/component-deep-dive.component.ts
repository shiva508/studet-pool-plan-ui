import { Component, OnInit } from '@angular/core';
import { SeverModel } from '../server.model';

@Component({
  selector: 'app-component-deep-dive',
  templateUrl: './component-deep-dive.component.html',
  styleUrls: ['./component-deep-dive.component.css']
})
export class ComponentDeepDiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  serverElements: SeverModel[] = [];
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverElements.push(new SeverModel('server',this.newServerName,this.newServerName));
  }

  onAddBlueprint() {
    this.serverElements.push(new SeverModel('blueprint', this.newServerName, this.newServerName));
  }

}
