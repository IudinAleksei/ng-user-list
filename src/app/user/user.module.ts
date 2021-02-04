import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [
    UserComponent,
    UserCardComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule
  ]
})
export class UserModule { }
