import * as am from "./api/api.model";
import * as vm from "./detail.vm";

export const mapDetailToVM = (data: am.CharacterDetail): vm.CharacterDetail => ({
  id: data.id,
  name: data.name,
  status: data.status,
  species: data.species,
  type: data.type,
  gender: data.gender,
  image: data.image,
});
