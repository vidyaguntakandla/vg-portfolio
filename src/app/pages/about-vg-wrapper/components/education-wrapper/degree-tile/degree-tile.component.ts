import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-degree-tile',
  templateUrl: './degree-tile.component.html',
  styleUrls: ['./degree-tile.component.scss']
})
export class DegreeTileComponent implements OnInit {
  @Input() degreeInfo: any;

  constructor() { }

  ngOnInit() {
  }

}
