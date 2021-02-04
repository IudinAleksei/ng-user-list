import { ITodo } from './../../../models/todo.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ITodo  = {
    userId: 0,
    id: 0,
    title: '',
    completed: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
