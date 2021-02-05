import { IUser } from './../../models/user.model';
import { UsersService } from './../../services/users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  length = 10;
  pageSize = 3;
  displayedColumns: string[] = ['photo', 'name', 'username', 'email', 'address', 'company'];
  dataSource: MatTableDataSource<IUser> = new MatTableDataSource();
  selectAll = 'all';

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {

    this.usersService
      .getUsersList()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.filterPredicate = (data, filter) => data.company.name.toLocaleLowerCase().trim().includes(filter.toLocaleLowerCase().trim());
      })
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
}
