import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { ITodo } from './../../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public userID = '';
  todos: ITodo[] = [];
  displayedColumns: string[] = ['id', 'title', 'status'];

  constructor(private usersService: UsersService, public route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userID = params.id;
    });

    this.usersService
      .getUserTodos(this.userID)
      .subscribe(res => {
        this.todos = res;
        if (!this.todos.length) {
          this.router.navigate(['user']);
        }
      });
  }
}
