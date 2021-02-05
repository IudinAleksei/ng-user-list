import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { ITodo } from './../models/todo.model';
import { IUser } from './../models/user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  todos: ITodo[] = [];
  userID = '';
  user: IUser = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };

  constructor(private userService: UserService, public route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userID = params.id;
    });

    this.userService
      .getUserInfo(this.userID)
      .subscribe(res => {
        this.user = res[0];
        if (!this.todos.length) {
          this.router.navigate(['user']);
        }
      });

    this.userService
      .getUserTodos(this.userID)
      .subscribe(res => {
        this.todos = res;
        if (!this.todos.length) {
          this.router.navigate(['user']);
        }
      });
  }
}
