import { Injectable } from '@angular/core';
import {  HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ToDo } from '../models/ToDo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url: string = "https://jsonplaceholder.typicode.com/todos";
  limits: string ='?_limit=8'
  constructor(private http: HttpClient) { }

  getTodos():Observable<ToDo[]> {
   return this.http.get<ToDo[]>(`${this.url}${this.limits}`);
  }

  toggle(todo: ToDo): Observable<any>{
    const updateUrl = `${this.url}/${todo.id}`
    return this.http.put(updateUrl, todo,httpOptions);
  }
  deleteToDo(todo: ToDo): Observable<ToDo>{
    const updateUrl = `${this.url}/${todo.id}`
    return this.http.delete<ToDo>(updateUrl, httpOptions);
  }
  addNewToDo(toDo: ToDo): Observable<ToDo>{
    return this.http.post<ToDo>(this.url, toDo, httpOptions);
  }

}
