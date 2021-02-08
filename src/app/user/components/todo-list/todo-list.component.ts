import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ITodo } from './../../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, AfterViewInit {
  @Input() todos: ITodo[] = [];
  displayedColumns: string[] = ['id', 'title', 'status'];
  dataSource: MatTableDataSource<ITodo> = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.todos);
    this.dataSource.sortingDataAccessor = this.toComparableValue;
    this.dataSource.sort = this.sort;
  }

  toComparableValue(item: ITodo, sortHeaderId: string): number | string {
    switch (sortHeaderId) {
      case 'id': return item.id;
      case 'title': return item.title;
      case 'status': return +item.completed;
      default: return +item.completed;
    }
  }
}

