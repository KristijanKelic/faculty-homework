import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PerfumesService } from 'src/app/services/perfumes.service';
import { Perfume } from 'src/app/models/perfume.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  perfume: Perfume;
  rate: number;
  ratingEnabled = true;
  isFavourite: boolean;
  @ViewChild('heart') heart: ElementRef;

  constructor(
    private _perfumesService: PerfumesService,
    private route: ActivatedRoute
  ) {}

  /*
    Inside ngOnInit method I am subscribing to the route params observable because i want to refresh data
    when url is changing and component remains the same.

    example: if we first load /product/1 and then we change the url somehow, by the button on the page or
    in the url address bar to /product/2 the url will change but not the data displayed.

    Subscribing to those changes will refresh data.

    -----------------------------------------------------------------------------------------------------
    Inside ngOnInit I am also checking if currently loaded perfume is already in list of favorites
    which is inside _perfumesService. Depending on what's the result isFavourite property will control
    adding or removing it from favorites.

    Within subscribe also checking if currently loaded perfume is already rated
  */
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.perfume = this._perfumesService.getPerfumeWithId(+params.id);

      if (this.perfume) {
        if (
          this.perfume.users.find(el => el.username === 'user') !== undefined
        ) {
          this.rate = this.perfume.users.find(
            el => el.username === 'user'
          ).rating;
          this.ratingEnabled = false;
        } else {
          this.rate = 0;
          this.ratingEnabled = true;
        }
      }
    });

    if (
      this._perfumesService
        .getFavorites()
        .find(el => el.id === this.perfume.id) !== undefined
    ) {
      this.isFavourite = true;
      this.heart.nativeElement.style.color = 'red';
    } else {
      this.isFavourite = false;
    }
  }

  /*
    This method is calling addTofavorites or removeFromfavorites depending on the flag isFavourite
  */
  addToFavorites() {
    if (!this.isFavourite) {
      this._perfumesService.addToFavorites(this.perfume);
      this.heart.nativeElement.style.color = 'red';
      this.isFavourite = true;
    } else {
      this._perfumesService.removeFromeFavorites(this.perfume);
      this.heart.nativeElement.style.color = 'grey';
      this.isFavourite = false;
    }
  }

  // Method to call rating method from the service
  ratePerfume() {
    if (this.ratingEnabled) {
      this._perfumesService.ratePerfume(this.perfume, this.rate);
    }
    this.ratingEnabled = false;
  }
}
