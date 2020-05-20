import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../../shared/services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  degreesData: any;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getDegreeData().subscribe((degreesList: any) => {
      this.degreesData = degreesList;
    });
  }

}
