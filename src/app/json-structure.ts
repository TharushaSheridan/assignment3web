export interface ImageJson {
  small: string;
}

export interface PetJson {
  id: string;
  name: string;
  petKind: string;
  age: number;
  image: ImageJson;
  ownerId: number;
}

export interface CatalogJson {
  pets: PetJson[];
}
