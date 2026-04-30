import { BrandDTO, ModelDTO } from './carsDTO.interfaces';

export interface Car {
  id: string;
  brand: BrandDTO;
  model: ModelDTO;
  total: number;
  imageUrl: string;
  brandId: string;
  brandName: string;
  modelId: string;
  modelName: string;
}
