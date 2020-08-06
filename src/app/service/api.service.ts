import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from 'src/app/entities/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  listar(): Observable<Model[]> {
    return this.http.get<Model[]>(
      'https://jsonplaceholder.typicode.com/todos/'
    );
  }
  create(model: Model): Observable<Model> {
    return this.http.post<Model>(
      'https://jsonplaceholder.typicode.com/todos/',
      model
    );
  }
  view(id: number): Observable<Model> {
    return this.http.get<Model>(
      'https://jsonplaceholder.typicode.com/todos/' + id
    );
  }
}
