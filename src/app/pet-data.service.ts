import { Injectable } from '@angular/core';
import {Pet} from "./pet";
import {PetJson} from "./json-structure";
import {catalog} from "./catalog-data";
@Injectable({
  providedIn: 'root'
})
export class PetDataService {

  private pets: Pet[] = []
  constructor() {
    catalog.pets.forEach(
      (petJson: PetJson) => this.pets.push(PetDataService.json2Pet(petJson)));
  }

  private static imageFolder = 'assets/images/pets/';

  private static json2Pet(petJson: PetJson): Pet {
    const pet: Pet = new Pet();
    pet.id = petJson.id;
    pet.name = petJson.name;
    pet.petKind = petJson.petKind;
    pet.age = petJson.age;
    pet.smallImgSrc = PetDataService.imageFolder + petJson.image.small;
    pet.ownerId = petJson.ownerId;
    // pet.smallImgSrc = PetDataService.imageFolder + flowerJson.picture.small;
    return pet;
  }

  public getPetList(): Pet[] {
    return this.pets;
  }

  public getPet(id: string): Pet | undefined {
    // @ts-ignore
    return this.pets.find(pet => pet.id === id)
  }

}
