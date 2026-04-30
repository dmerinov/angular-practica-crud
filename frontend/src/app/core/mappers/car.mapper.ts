import { BrandDTO, CarDTO, ModelDTO } from '../interfaces/carsDTO.interfaces';
import { Car } from '../interfaces/car.interface';

export class CarMapper {
  static carDTOToCar(item: CarDTO): Car {
    return {
      id: item.id,
      total: item.total,
      imageUrl: item.imageUrl,
      brandId: item.brand.id,
      brandName: item.brand.name,
      modelId: item.model.id,
      modelName: item.model.name,
    };
  }

  static mapCarDTOArrayToCarArray(items: CarDTO[]): Car[] {
    return items.map(this.carDTOToCar);
  }
}
