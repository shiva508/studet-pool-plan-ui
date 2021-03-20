import { Component, ContentChild, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { SeverModel } from '../../server.model';
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input('severModel') element: SeverModel = new SeverModel('', '', '');
  @ContentChild('contentChildLocalReferance') contentChildLocalReferance: any;
  constructor() {
  }
  ngOnChanges(changes: SimpleChange) {
  }
  ngOnInit(): void {
  }

 
}
