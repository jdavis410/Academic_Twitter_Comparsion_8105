import { Injectable } from '@angular/core';
import {Student} from '../Structs/studentClass';

import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class StudentService {

  private studentUrl = 'api/students';
  constructor(
    private http: HttpClient
  ) { }

  getStudents (section : string): Observable<Student[]> {
    const url = `${this.studentUrl}/${section}`;
    return this.http.get<Student[]>(url).pipe(
      catchError(this.handleError('getStudents', []))
    );
  }

  getStudent (id: number) : Observable<Student> {
    const url = `${this.studentUrl}/${id}`;
    return this.http.get<Student>(url).pipe(
      catchError(this.handleError<Student>(`getStudent id=${id}`))
    );
  }

  updateStudent(student : Student): Observable<any> {
    return this.http.put(this.studentUrl, student, httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateStudent'))
      );
  }

  addStudent (student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentUrl, student, httpOptions)
      .pipe(
        catchError(this.handleError<Student>('addStudent'))
    );
  }

  deleteStudent (student: Student | string): Observable<Student> {
    const handle = typeof student === 'string' ? student : student.handle;
    const url = `${this.studentUrl}/${handle}`;

    return this.http.delete<Student>(url, httpOptions)
      .pipe(
        catchError(this.handleError<Student>('deleteStudent'))
    );
  }


  private log(message: string) {
    //log
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any) : Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
