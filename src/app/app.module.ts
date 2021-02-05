import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormatUserPipe } from './pipes/format-user.pipe';
import { ExtractCompanyPipe } from './pipes/extract-company.pipe';
import { FormatAddressPipe } from './pipes/format-address.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    NotFoundComponent,
    FormatUserPipe,
    ExtractCompanyPipe,
    FormatAddressPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule
  ],
  providers: [
    // FormatAdressPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
