import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Perfume } from 'src/app/models/perfume.model';
import { PerfumesService } from 'src/app/services/perfumes.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  perfumes: Perfume[] = [];

  constructor(private _perfumesService: PerfumesService) {
    this._perfumesService.perfumesArrayChanged.subscribe((data) => {
      this.perfumes = data;
  });
  }

  ngOnInit() {
    this._perfumesService.returnPerfumes();
  }
}
