import {Component, Input, OnInit} from '@angular/core';
import {Grid} from './grid.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() zeilen: number;
  @Input() spalten: number;
  @Input() grid: Grid[];
  constructedGrid: Array<any>;

  constructor() { }

  ngOnInit() {
    const matrix = Array.from(Array(this.zeilen), () => new Array(this.spalten));

     this.grid.map((line) => {
       matrix[line.zeile - 1][line.spalte - 1] = line.bezeichnung;
     });

     this.constructedGrid = [...matrix];
  }

}
