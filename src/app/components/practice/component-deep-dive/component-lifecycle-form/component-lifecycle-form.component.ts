import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-lifecycle-form',
  templateUrl: './component-lifecycle-form.component.html',
  styleUrls: ['./component-lifecycle-form.component.css']
})
export class ComponentLifecycleFormComponent implements OnInit {
  @Output() saveLifeCycle = new EventEmitter<any>();
  cycleNameInput: string = '';
  cycleOrderInput: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  addNewLifeCycle() {
    this.saveLifeCycle.emit({
      cycleName: this.cycleNameInput,
      cycleOrder:this.cycleOrderInput
    })
  }

}
