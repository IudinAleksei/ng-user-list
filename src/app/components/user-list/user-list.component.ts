import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {

  length = 10;
  pageSize = 3;

  pageEvent: PageEvent = new PageEvent();

  constructor() { }

  ngOnInit(): void {
  }
}
