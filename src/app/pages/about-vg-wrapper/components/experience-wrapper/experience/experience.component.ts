import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../../../../../shared/services/data.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  @ViewChild('pie', {static: false}) chartContainer: ElementRef;

  get height(): number { return parseInt(this.chartContainer.nativeElement.offsetHeight, 10); }
  get width(): number { return parseInt(this.chartContainer.nativeElement.offsetWidth, 10); }
  radius: number;
  arc: any;
  pie: any;
  slices: any;
  color: any;
  svg: any;
  mainContainer: any;
  total: number;
  arcLabel: any;
  texts: any;

  dataSource: any;
  projectsData: any;

  constructor(private service: DataService) { }

  ngOnInit() {
    window.addEventListener('resize', this.resize.bind(this));
    this.service.getProjectsData().subscribe((projectsList: any) => {
      this.projectsData = projectsList;
    });
    this.dataSource = this.service.getExperinceData();
  }

  ngAfterViewInit() {
    this.constructPieChart();
  }

  /*********** Pie Chart functionality ***************/

  constructPieChart() {
    this.svg = d3.select('#pie').select('svg');
    this.setSVGDimensions();
    this.color = d3.scaleOrdinal(d3.schemeCategory10);
    this.mainContainer = this.svg.append('g').attr('transform', `translate(${this.radius}, ${this.radius})`);
    this.pie = d3.pie()
                 .sort(null).value((d: any) => d.value);
                //  .padAngle(.05);
    this.draw();
  }

  resize() {
    this.setSVGDimensions();
    this.setArcs();
    this.repaint();
    this.drawLabels();
  }

  setSVGDimensions() {
    this.radius = (Math.min(this.height, this.width)) / 2;
    this.svg.attr('width', 2 * this.radius).attr('height', 2 * this.radius);
    this.svg.select('g').attr('transform', 'translate(' + this.radius + ',' + this.radius + ')');
  }

  repaint() {
    this.drawSlices();
    this.drawLabels();
  }

  draw() {
    this.setArcs();
    this.drawSlices();
    this.drawLabels();
  }

  setArcs() {
    this.arc = d3.arc().outerRadius(this.radius).innerRadius(0);
    this.arcLabel = d3.arc().innerRadius(this.radius * .7).outerRadius(this.radius * .7);
  }

  drawLabels() {
    this.texts = this.mainContainer.selectAll('text')
      .remove().exit()
      .data(this.pie(this.dataSource))
      .enter().append('text')
      .attr('text-anchor', 'middle').attr('transform', d => `translate(${this.arcLabel.centroid(d)})`).attr('dy', '0.35em');
    this.texts.append('tspan').filter(d => (d.endAngle - d.startAngle) > 0.25)
      .attr('x', 0).attr('y', '1.3em').attr('fill-opacity', 0.7)
      .attr('x', 0).attr('y', 0).style('font-weight', 'bold')
      .text(d => d.data.name);
  }

  drawSlices() {
    const animationDuration = 750;
    const t = d3.transition().duration(animationDuration);

    this.slices = this.mainContainer.selectAll('path')
      .remove().exit()
      .data(this.pie(this.dataSource))
      .enter().append('g').append('path')
      .attr('d', this.arc);
    this.slices
        .attr('fill', (d) => {
          if (d.data.value >= 50) {
            return '#00000099';
          } else if (d.data.value >= 30) {
            return '#969697';
          }

          return '#dddddd';
        })
        .transition(t);
  }

}
