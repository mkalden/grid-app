import {Component, OnInit} from '@angular/core';
import {GridItem} from './grid/grid-item.model';
import {GridService} from './grid/grid.service';
import {Grid} from './grid/grid.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  grid: Grid[];
  gridItems: GridItem[];

  constructor(private gridService: GridService) {}

  ngOnInit(): void {
    this.gridItems = this.gridService.items;
  }

}
