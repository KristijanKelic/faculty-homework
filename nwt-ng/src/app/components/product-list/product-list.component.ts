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

  /*Here inside the construtor I am subscribing to the custom event emmiter from the service which emits
   whenever some change happens to the original array inside the service

   Reason to do that is because service returns slice(copy) of an original array to the component
   */
  constructor(private _perfumesService: PerfumesService) {
    this._perfumesService.perfumesArrayChanged.subscribe(data => {
      this.perfumes = data;
    });
  }

  ngOnInit() {
    this._perfumesService.returnPerfumes();
  }
}
