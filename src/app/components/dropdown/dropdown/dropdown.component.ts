import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() dropdownlist:Array<any>=[];
  @Input() selectedValue:Number=0;
  @Output() dropDownEmitter:EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.dropdownlist);
  }

  onChangeDropDown=(event:any)=>{
    this.selectedValue=event.target.value;
    this.dropDownEmitter.emit(this.selectedValue);
  }
}
