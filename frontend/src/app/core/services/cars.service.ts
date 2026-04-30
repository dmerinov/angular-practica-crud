import { inject, Injectable, signal } from '@angular/core';
import { Car } from '../interfaces/car.interface';
import {HttpClient} from '@angular/common/http';
import { CarListDTO } from '../interfaces/carsDTO.interfaces';
import { CarMapper } from '../mappers/car.mapper';

@Injectable({ providedIn: 'root' })
export class CarsService {
  cars = signal<CarListDTO[]>([]);
  private httpClient = inject(HttpClient);
  constructor() {
    this.loadCars();
  }

  loadCars() {
    this.httpClient.get<CarListDTO>('http://localhost:3000/cars').subscribe((response) => {
      const cars: Car[] = CarMapper.mapCarDTOArrayToCarArray(response.items);
      console.log(response.items);
      console.log(cars);
    });
  }
}
