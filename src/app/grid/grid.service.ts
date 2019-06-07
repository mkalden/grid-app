import { Injectable } from '@angular/core';
import {GridItem} from './grid-item.model';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  private _items: GridItem[] = [
    {
      'id': 2,
      'bezeichnung': 'button1',
      'zeilen': 5,
      'spalten': 8,
      'position': 0,
      'farbe': 'rot',
      'grid': [
        {
          'zeile': 2,
          'spalte': 6,
          'bezeichnung': 'fooo'
        },
        {
          'zeile': 3,
          'spalte': 4,
          'bezeichnung': 'baaaar'
        }
      ]
    }
  ];

  get items(): GridItem[] {
    return [...this._items];
  }
}
