import { Component, inject, signal } from '@angular/core';
import { CarsService } from '../../core/services/cars.service';
import { CarDTO } from '../../core/interfaces/carsDTO.interfaces';
import { Car } from '../../core/interfaces/car.interface';

@Component({
  selector: 'app-home-page-component',
  templateUrl: './home-page-component.html',
})
export default class HomePageComponent {
  carsService = inject(CarsService);
  cars = signal(this.carsService.cars)
}
