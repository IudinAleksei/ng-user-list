import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from './../../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos: ITodo[] = [];
  displayedColumns: string[] = ['id', 'title', 'status'];

  constructor() { }

  ngOnInit(): void {
  }
}
