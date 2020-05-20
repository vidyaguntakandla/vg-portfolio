import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss']
})
export class ProjectTileComponent implements OnInit {
  @Input() projectInfo: any;
  showAccomplishment = false;
  showMoreInfo = false;

  constructor() { }

  ngOnInit() {
  }

  toggleAccomplishment() {
    this.showMoreInfo = false;
    this.showAccomplishment = !this.showAccomplishment;
  }

  toggleShowMoreInfo() {
    this.showAccomplishment = false;
    this.showMoreInfo = !this.showMoreInfo;
  }
}
