import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';

@Injectable()
export class LeaderboardService {

  constructor(private http: HttpClient) {}

  public getJSON(): Observable<any> {
    return this.http.get<User[]>("assets/data/dummyData.json");
  }

    getAllUsers(): Observable<any> {
    return this.http.get<User[]>('http://localhost:8080/api/users/users');
  }
}
