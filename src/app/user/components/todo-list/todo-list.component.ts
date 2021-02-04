import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ITodo } from './../../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: ITodo[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService
      .getUserTodos(1)
      .subscribe({
        next: res => this.todos = res,
        error: err => console.warn('Error: ', err),
        complete: () => null,
      });
  }
}
