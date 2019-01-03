import { Component, OnInit} from '@angular/core';

import { PerfumesService } from 'src/app/services/perfumes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private _perfumesService: PerfumesService) { }

  ngOnInit() {
  }

  filterPerfumes(a) {
    this._perfumesService.filterPerfumes(a.value);
  }

}
