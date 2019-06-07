import {Grid} from './grid.model';

export interface GridItem  {
  id: number;
  bezeichnung: string;
  zeilen: number;
  spalten: number;
  position: number;
  farbe: string;
  grid: Grid[];
}
