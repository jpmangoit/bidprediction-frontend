import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://103.127.29.85:5000/predict';

  constructor(private http: HttpClient) {}

  // Function to send the payload
  predict(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, payload);
  }
}
