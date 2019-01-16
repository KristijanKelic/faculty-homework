import { Component, OnInit } from '@angular/core';

import { Perfume } from 'src/app/models/perfume.model';
import { PerfumesService } from 'src/app/services/perfumes.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  constructor(private _perfumesService: PerfumesService) {}

  perfumes: Perfume[] = [];

  ngOnInit() {
    this.perfumes = this._perfumesService.getFavorites();
  }
}
