export interface ImageJson {
  small: string;
}

export interface PetJson {
  id: number;
  name: string;
  petKind: string;
  age: number;
  image: ImageJson;
  ownerId: number;
}

export interface CatalogJson {
  pets: PetJson[];
}
