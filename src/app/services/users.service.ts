import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { IUser } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly USERS_URL = 'https://jsonplaceholder.typicode.com/users';

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
