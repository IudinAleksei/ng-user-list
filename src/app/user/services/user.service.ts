import { UserModule } from './../user.module';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IUser } from './../../models/user.model';
import { ITodo } from './../../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly USERS_URL = 'https://jsonplaceholder.typicode.com/users';
  private readonly TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
  private readonly USERS_PARAM = 'id';
  private readonly TODOS_PARAM = 'userId';

  constructor(private http: HttpClient) { }

  getUserInfo(id: string): Observable<[IUser]> {
    const params = new HttpParams()
      .set(this.USERS_PARAM, id.toString());

    return this.http.get<[IUser]>(this.USERS_URL, { params })
      .pipe(
        retry(2),
        catchError(err => {
          console.warn('Error: ', err);
          return EMPTY;
        })
      );
  }

  getUserTodos(id: string): Observable<ITodo[]> {
    const params = new HttpParams()
      .set(this.TODOS_PARAM, id.toString());

    return this.http.get<ITodo[]>(this.TODOS_URL, { params })
      .pipe(
        retry(2),
        catchError(err => {
          console.warn('Error: ', err);
          return EMPTY;
        })
      );
  }
}
