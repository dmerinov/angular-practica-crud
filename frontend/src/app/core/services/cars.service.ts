import { inject, Injectable, signal } from '@angular/core';
import { Car } from '../interfaces/car.interface';
import {HttpClient, HttpParams } from '@angular/common/http';
import { CarListDTO } from '../interfaces/carsDTO.interfaces';
import { CarMapper } from '../mappers/car.mapper';

@Injectable({ providedIn: 'root' })
export class CarsService {
  cars = signal<Car[]>([]);
  currentPage = signal<number>(1)
  totalPages = signal<number>(0)
  loading = signal<boolean>(false)
  private httpClient = inject(HttpClient);
  constructor() {
    this.loadCars();
  }

  loadCars() {
    if (this.loading()) return;
    this.loading.set(true);
    const params = new HttpParams({
      fromObject: {
        limit: 10,
        page: this.currentPage()
      }
    });
    this.httpClient.get<CarListDTO>('http://localhost:3000/cars',{
      params: params
    }).subscribe((response) => {
      const newCars: Car[] = CarMapper.mapCarDTOArrayToCarArray(response.items);
      console.log(response.items);
      console.log(newCars);
      this.cars.set(newCars);
      this.totalPages.set(response.meta.totalPages);
      this.loading.set(false);
    });
  }

  getNextPage(){
    if(this.currentPage() < this.totalPages()){
      console.log("currentPage ", this.currentPage());
      console.log("totalPages ", this.totalPages());
      this.currentPage.set(this.currentPage() + 1);
      this.loadCars();
    }
  }

  getPreviousPage(){
    if (this.currentPage() > 1) {
      console.log('currentPage ', this.currentPage());
      console.log('totalPages ', this.totalPages());
      this.currentPage.set(this.currentPage() - 1);
      this.loadCars();
    }
  }
}
