import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSelectChange } from '@angular/material/select';

import { IUser } from './../../models/user.model';
import { UsersService } from './../../services/users.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  length = 10;
  pageSize = 3;
  displayedColumns: string[] = ['photo', 'name', 'username', 'email', 'address'];
  sortOptions: { by: string, dir: SortDirection }[] = [
    { by: 'name', dir: 'asc' },
    { by: 'username', dir: 'asc' },
    { by: 'email', dir: 'asc' },
    { by: 'address', dir: 'asc' },
    { by: 'name', dir: 'desc' },
    { by: 'username', dir: 'desc' },
    { by: 'email', dir: 'desc' },
    { by: 'address', dir: 'desc' },
    ];
  dataSource: MatTableDataSource<IUser> = new MatTableDataSource();
  selected = '';
  currentSort = this.sortOptions[0];
  users: IUser[] = [];

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.usersService
      .getUsersList()
      .subscribe(res => {
        this.users = res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.filterPredicate = (data, filter) =>
          data.company.name.toLocaleLowerCase().trim().includes(filter.toLocaleLowerCase().trim());
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
        err => {
        this.router.navigate(['error']);
        console.warn('HTTP Error: ', err);
        }
      );
  }

  applyFilter(): void {
    const filterValue = this.selected;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applySort(): void {
    this.sort.active = this.currentSort.by;
    this.sort.direction = this.currentSort.dir;
    this.dataSource.sort = this.sort;
  }

  clearFilter(): void {
    this.selected = '';
    this.applyFilter();
  }

  userClickHandler(id: string): void {
    this.router.navigate(['user', id]);
  }
}
