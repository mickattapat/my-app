import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultAPI } from '../models/api.model';
@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private http: HttpClient) { }
  
  public apiEnpoint = environment

  getUser(): Observable<any>{
    console.log("production -> ", this.apiEnpoint.production);
    return this.http.get<any>(`${this.apiEnpoint.baseApi}/users`);
  }
}
