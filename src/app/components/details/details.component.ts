import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../housing.service';
import { HousingLocation } from '../../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id'])
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId)
  }

  ngOnInit() {
    console.log(this.housingLocation)
  }
}
