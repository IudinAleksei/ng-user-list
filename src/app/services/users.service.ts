import { Injectable } from '@angular/core';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IUser } from './../models/user.model';
import { ITodo } from './../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly USERS_URL = 'https://jsonplaceholder.typicode.com/users';
  private readonly TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
  private readonly TODOS_PARAM = 'userId';

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.USERS_URL)
      .pipe(
        retry(2),
        catchError(err => {
          console.warn('Error: ', err);
          return throwError(err);
        })
      );
  }
}
