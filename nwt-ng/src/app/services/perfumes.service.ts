import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Perfume } from '../models/perfume.model';

@Injectable({providedIn: 'root'})
export class PerfumesService {
    private _url = '../../assets/perfumes.json';
    perfumesArrayChanged = new EventEmitter<Perfume[]>();
    private perfumes: Perfume[] = [];
    private favoruitePerfumes: Perfume[] = [];

    /* HTTP request to get data from local JSON file ../../assets/perfumes.json
      HTTP request returns Observable
      subscribing to that property perfumes changes and custom event emits new change in array to the component
    */
    constructor(private http: HttpClient) {
      this.http.get<Perfume[]>(this._url).subscribe((data) => {
        this.perfumes = data;
        this.perfumesArrayChanged.emit(this.perfumes.slice());
      });
    }

    // Simple method uses Array.prototype.find method to get correct element from an array
    // method recieves ID to compare with
    getPerfumeWithId(id: string): Perfume {
      return this.perfumes.find(el => el.id === id);
    }

    // Method which returns copy of original property perfumes
    returnPerfumes() {
      this.perfumesArrayChanged.emit(this.perfumes.slice());
    }

    // Method for adding favourites
    addToFavourites(item: Perfume) {
      this.favoruitePerfumes.push(item);
    }

    // Method for removing favourites
    removeFromeFavourites(item: Perfume) {
      this.favoruitePerfumes.splice(this.favoruitePerfumes.findIndex(el => el.id === item.id), 1);
    }

    // Method which returns original favourites array
    getFavorites() {
      return this.favoruitePerfumes;
    }

    /*
      Method for rating, recieves item to rate and value of rating
      first searches for exact element of an array and it's index
      then add new user (default username and comment in this case, rating = rating parameter) and push it to array
      calculate new rating
      replace existing element with new one in the original array
      emit new changes
    */
    ratePerfume(item: Perfume, rating: number) {
      const perfume = this.perfumes.find(el => el.id === item.id);
      const index = this.perfumes.findIndex(el => el.id === item.id);
      perfume.users.push({username: 'user', rating: rating, comment: ''});
      let ratings = 0;
      for ( const a of perfume.users) {
        ratings += a.rating;
      }
      ratings = ratings / perfume.users.length;
      perfume.rating = Math.round(ratings * 100) / 100;

      this.perfumes[index] = perfume;
      this.perfumesArrayChanged.emit(this.perfumes.slice());
    }
}
