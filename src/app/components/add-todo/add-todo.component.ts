import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodoEmitter: EventEmitter<any>= new EventEmitter();
  title:string=""
  constructor() { }

  ngOnInit(): void {
  }

  addNewTodo() {
    const todo = {
      title: this.title,
      completed:false
    }
    this.addTodoEmitter.emit(todo);
  }
}
