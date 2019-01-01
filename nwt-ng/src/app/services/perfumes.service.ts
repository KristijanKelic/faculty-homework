import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Perfume } from '../models/perfume.model';

@Injectable({providedIn: 'root'})
export class PerfumesService {
    private _url = '../../assets/perfumes.json';
    perfumesArrayChanged = new EventEmitter<Perfume[]>();

    constructor(private http: HttpClient) {}

    getPerfumes(): Observable<Perfume[]> {
      return this.http.get<Perfume[]>(this._url);
    }
}
