import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { TodoService} from '../../services/todo.service'
@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  todos: ToDo[] = [];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos=todos
    });
  }

  deleteToDo(todo: ToDo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    console.log(todo)
    this.todoService.deleteToDo(todo).subscribe();
  }

  addTodoEmitter(todo:ToDo) {
    this.todoService.addNewToDo(todo).subscribe(t => {
      this.todos.push(t);
    })
  }
}
