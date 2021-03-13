import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ToDo = new ToDo;
  @Output() deleteToDo: EventEmitter<ToDo> = new EventEmitter();
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  setClasses() {
    let classes = {
      todo: true,
      'is-complete':this.todo.completed
    }
    return classes;
  }

  onTaggle(todo:ToDo) {
    console.log(todo.title)
    todo.completed = !todo.completed;

    //backend toggle
    this.todoService.toggle(todo).subscribe(todo => console.log(todo));
  }
  onDelete(todo: ToDo) {
    this.deleteToDo.emit(todo);
  }
}
