import { Component, OnInit } from '@angular/core';

import { Perfume } from 'src/app/models/perfume.model';
import { PerfumesService } from 'src/app/services/perfumes.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  perfumes: Perfume[] = [];

  constructor(private _perfumesService: PerfumesService) { }

  ngOnInit() {
    this.perfumes = this._perfumesService.getAllPerfumes();
  }

}
