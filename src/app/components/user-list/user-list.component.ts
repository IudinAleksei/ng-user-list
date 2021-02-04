import { IUser } from './../../models/user.model';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  users: IUser[] = [];
  length = 10;
  pageSize = 3;

  pageEvent: PageEvent = new PageEvent();

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService
      .getUsersList()
      .subscribe(res => this.users = res);
  }
}
