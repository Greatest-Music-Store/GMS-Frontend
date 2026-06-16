import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Users {
  private apiUrl = 'http://192.168.137.1:5041';


  constructor(private http: HttpClient){}
}
