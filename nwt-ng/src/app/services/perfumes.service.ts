import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Perfume } from '../models/perfume.model';

@Injectable({providedIn: 'root'})
export class PerfumesService {
    private _url = '../../assets/perfumes.json';
    perfumesArrayChanged = new EventEmitter<Perfume[]>();
    perfumes: Perfume[] = [];

    constructor(private http: HttpClient) {
      this.http.get<Perfume[]>(this._url).subscribe((data) => {
        this.perfumes = data;
        this.perfumesArrayChanged.emit(this.perfumes.slice());
      });
    }

    getPerfumeWithId(id: string): Perfume {
      return this.perfumes.find(el => el.id === id);
    }

    returnPerfumes() {
      this.perfumesArrayChanged.emit(this.perfumes.slice());
    }
}
