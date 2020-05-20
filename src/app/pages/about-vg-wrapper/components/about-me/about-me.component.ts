import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  accomplishments = [ 'html5', 'css3', 'javascript', 'jquery', 'angular', 'react', 'nodejs', 'java' ];
  skills = ['Web Development', 'HTML/CSS/Bootstrap', 'JavaScript/jQuery', 'Angular/React/Nodejs/Electrode',
            'SE0 (Search Engine Optimization)', 'Web Designing', 'D3.js/Moment.js/SVG', 'Co-ordinating',
            'Production Support', 'Core Java for Backend implementation'];

  constructor() { }

  ngOnInit() {}
}
