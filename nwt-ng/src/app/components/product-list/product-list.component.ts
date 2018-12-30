import { Component, OnInit } from '@angular/core';
import { Perfume } from 'src/app/models/perfume.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  perfumes: Perfume[] = [{
    name: 'Dior homme intense',
    role: 'men',
    description: 'Very good perfume. You should buy it, trust me, you wont make a mistake, its made mmmm',
    imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.13016.jpg',
    rating: 5.0,
    users: {
      username: 'Christian',
      rating: 5,
      comment: 'Very good'
    }
  },
    {
      name: 'Dior homme intense',
      role: 'men',
      description: 'Very good perfume. You should buy it, trust me, you wont make a mistake, its made mmmm',
      imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.13016.jpg',
      rating: 5.0,
      users: {
        username: 'Christian',
        rating: 5,
        comment: 'Very good'
      }
    }];

  constructor() { }

  ngOnInit() {
  }

}
