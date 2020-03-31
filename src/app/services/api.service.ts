import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiEndpoint = "http://localhost:8082/";

  constructor(private http:HttpClient) {}

  getApiContext(): Observable<any> {
    return this.http.get(this.apiEndpoint);
  }
}
