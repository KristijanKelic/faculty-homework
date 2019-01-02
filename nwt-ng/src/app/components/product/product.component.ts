import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Perfume } from 'src/app/models/perfume.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() perfume: Perfume;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  loadDetail() {
    this.router.navigate(['/product', this.perfume.id]);
  }

}
