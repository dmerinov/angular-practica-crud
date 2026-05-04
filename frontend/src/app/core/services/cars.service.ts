import { computed, inject, Injectable, signal } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { rxResource } from '@angular/core/rxjs-interop';

import { catchError, map, of, throwError } from 'rxjs';

import { CarListDTO } from '../interfaces/carsDTO.interfaces';
import { CarMapper } from '../mappers/car.mapper';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private httpClient = inject(HttpClient);

  currentPage = signal(1);

  carsResource = rxResource({
    params: () => ({
      page: this.currentPage(),
    }),

    stream: ({ params }) => {
      const httpParams = new HttpParams({
        fromObject: {
          limit: 10,
          page: params.page,
        },
      });

      return this.httpClient
        .get<CarListDTO>('http://localhost:3000/cars', { params: httpParams })
        .pipe(
          map((response) => ({
            cars: CarMapper.mapCarDTOArrayToCarArray(response.items),
            totalPages: response.meta.totalPages,
          })),

          catchError((error) => {
            console.error('Error cargando coches:', error);

            return throwError(() => error);
          }),
        );
    },
  });

  cars = computed(() => this.carsResource.value()?.cars ?? []);

  totalPages = computed(() => this.carsResource.value()?.totalPages ?? 0);

  loading = this.carsResource.isLoading;

  error = computed(() => {
    const err = this.carsResource.error();

    if (!err) return null;

    return 'No se pudieron cargar los coches';
  });

  getNextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((page) => page + 1);
    }
  }

  getPreviousPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((page) => page - 1);
    }
  }
}
