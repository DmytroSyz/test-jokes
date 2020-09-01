import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface IJokeValue {
  categories: [];
  id: number;
  joke: string;
}

export interface IJoke {
  type: 'string';
  value: IJokeValue;
}

export interface IJokes {
  type: string;
  value: IJokeValue[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  public jokes: BehaviorSubject<IJokes> = new BehaviorSubject(null);
  public jokes$: Observable<IJokes> = this.jokes.asObservable();

  public getJokes(): Observable<object> {
    return this.httpClient.get('http://api.icndb.com/jokes/random/1000').pipe(tap((res: IJokes) => {
      this.jokes.next(res);
    }));
  }

  public getJoke(id): Observable<object> {
    return this.httpClient.get(` http://api.icndb.com/jokes/${id}`);
  }
}
