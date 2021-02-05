import { IUser } from './../../models/user.model';
import { UsersService } from './../../services/users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material/select';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  length = 10;
  pageSize = 3;
  displayedColumns: string[] = ['photo', 'name', 'username', 'email', 'address'];
  dataSource: MatTableDataSource<IUser> = new MatTableDataSource();
  selected = '';
  users: IUser[] = [];

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    console.log(this.sort);

    this.usersService
      .getUsersList()
      .subscribe(res => {
        this.users = res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.filterPredicate = (data, filter) =>
          data.company.name.toLocaleLowerCase().trim().includes(filter.toLocaleLowerCase().trim());
        this.dataSource.sort = this.sort;
      });
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit');
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }



  applyFilter(event: MatSelectChange): void {
    const filterValue = event.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
}
