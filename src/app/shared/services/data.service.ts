import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Item {
  skill: string;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly skillSet = [
    {
      skill: 'CSS',
      value: 9
    },
    {
      skill: 'Bootstrap',
      value: 6
    },
    {
      skill: 'JavaScript',
      value: 9
    },
    {
      skill: 'jQuery',
      value: 8.5
    },
    {
      skill: 'ReactJs',
      value: 7
    },
    {
      skill: 'HTML4/5',
      value: 9
    },
    {
      skill: 'D3Js',
      value: 5
    },
    {
      skill: 'Electrode',
      value: 7
    },
    {
      skill: 'Angular',
      value: 8
    },
    {
      skill: 'NodeJs',
      value: 7
    }
  ];

  private readonly focusData = [
    {
      name: 'Development and Site Enhancement',
      workLevel: 50
    },
    {
      name: 'Interaction and Design Enhancement',
      workLevel: 15
    },
    {
      name: 'Planning and Analysis',
      workLevel: 10
    },
    {
      name: 'Information gathering and documentation ',
      workLevel: 5
    },
    {
      name: 'production support',
      workLevel: 5
    },
    {
      name: 'Integration and Testing',
      workLevel: 10
    },
    {
      name: 'Deployment Support',
      workLevel: 5
    }
  ];

  private readonly experienceSet = [
    {
      name: 'Coder',
      value: '60'
    },
    {
      name: 'Interactor',
      value: '30'
    },
    {
      name: 'Designer',
      value: '10'
    }
  ];

  constructor(private http: HttpClient) { }

  getSkillsData(): Item[] {
    return this.skillSet;
  }

  getFocusData() {
    return this.focusData;
  }

  getProjectsData() {
    return this.http.get('../../../assets/data/projects-list.json');
  }

  getDegreeData() {
    return this.http.get('../../../assets/data/degrees-list.json');
  }

  getExperinceData() {
    return this.experienceSet;
  }
}
