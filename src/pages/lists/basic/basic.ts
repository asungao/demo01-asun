import { Component } from '@angular/core';


@Component({
  templateUrl: 'basic.html'
})
export class BasicPage {
  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'GTA',
    'Halo'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
