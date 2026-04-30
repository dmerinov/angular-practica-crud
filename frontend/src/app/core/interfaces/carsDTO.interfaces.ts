export interface CarListDTO {
  items: CarDTO[];
  meta: Meta;
}

export interface CarDTO {
  id: string;
  brand: BrandDTO;
  model: ModelDTO;
  total: number;
  imageUrl: string;
}

export interface BrandDTO {
  id: string;
  name: string;
}

export interface ModelDTO {
  id: string;
  name: string;
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
