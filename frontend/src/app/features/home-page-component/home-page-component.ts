import { Component, inject, signal } from '@angular/core';
import { CarsService } from '../../core/services/cars.service';

@Component({
  selector: 'app-home-page-component',
  templateUrl: './home-page-component.html',
  styleUrls: ['./home-page-component.css']
})
export default class HomePageComponent {
  carsService = inject(CarsService);

  protected getPreviousPage() {
    this.carsService.getPreviousPage()
  }

  protected getNextPage() {
    this.carsService.getNextPage()
  }
}
