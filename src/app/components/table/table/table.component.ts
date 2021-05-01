import { Component, OnInit } from '@angular/core';
import {DropdownComponent} from '../../dropdown/dropdown/dropdown.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users:Array<any>=[];
  dropdownlist:Array<any>=[];
  constructor() { }

  ngOnInit(): void {
    this.users.push({"id":1,"first":"Mark","last":"Otto","handle":"@mdo","choose":1},
                    {"id":2,"first":"Jacob","last":"Thornton","handle":"@fat"},
                    {"id":3,"first":"Larry","last":"the Bird","handle":"@twitter"});

     this.dropdownlist.push({"id":1,"key_value":"One"},
                            {"id":2,"key_value":"Two"},
                            {"id":3,"key_value":"Three"})               
  }

  onChangeData=()=>{
    console.log(this.users);
  }

  dropDownEmitter=(event:any,index:any)=>{
    console.log(event);
    console.log(index);
    var updatedObject=this.users[index];
    updatedObject.choose=parseInt(event);
    this.users[index]=updatedObject;
    console.log(this.users)
  }

}
