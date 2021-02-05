import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';


@NgModule({
  declarations: [
    UserComponent,
    UserCardComponent,
    TodoListComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class UserModule { }
