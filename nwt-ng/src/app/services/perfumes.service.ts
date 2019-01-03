import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Perfume } from '../models/perfume.model';

@Injectable({providedIn: 'root'})
export class PerfumesService {
    private _url = '../../assets/perfumes.json';
    perfumesArrayChanged = new EventEmitter<Perfume[]>();
    private perfumes: Perfume[] = [];
    private favoruitePerfumes: Perfume[] = [];

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

    addToFavorites(item: Perfume) {
      this.favoruitePerfumes.push(item);
    }

    getFavorites() {
      return this.favoruitePerfumes;
    }

    ratePerfume(item: Perfume, rating: number) {
      const perfume = this.perfumes.find(el => el.id === item.id);
      const index = this.perfumes.findIndex(el => el.id === item.id);
      perfume.users.push({username: 'user', rating: rating, comment: ''});
      let ratings = 0;
      for ( const a of perfume.users) {
        ratings += a.rating;
      }
      ratings = ratings / perfume.users.length;
      perfume.rating = ratings;

      this.perfumes[index] = perfume;
      this.perfumesArrayChanged.emit(this.perfumes.slice());
    }
}
