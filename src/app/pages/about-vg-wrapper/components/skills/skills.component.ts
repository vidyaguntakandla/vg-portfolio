import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit, AfterViewInit {
  @ViewChild('pie', {static: false}) chartContainer: ElementRef;
  @ViewChild('bar', {static: false}) barContainer: ElementRef;

  themeColor = '#1e1e3f';
  dataSource: any;
  get height(): number { return parseInt(this.chartContainer.nativeElement.offsetHeight, 10); }
  get width(): number { return parseInt(this.chartContainer.nativeElement.offsetWidth, 10); }
  radius: number;
  arc: any;
  pie: any;
  slices: any;
  color: any;
  svg: any;
  mainContainer: any;
  tooltip: any;
  total: number;
  arcLabel: any;
  texts: any;

  barChartData: any;

  get barHeight(): number { return parseInt('28', 10); }
  get barwidth(): number { return parseInt(this.barContainer.nativeElement.offsetWidth, 10); }

  constructor(private service: DataService) {
    this.dataSource = this.service.getSkillsData();
    this.barChartData = this.service.getFocusData();
    this.total = this.dataSource.reduce((sum, it) => sum += it.value, 0);
  }

  ngAfterViewInit() {
    this.constructPieChart();

    if (this.barwidth) {
      this.constructBarChart();
    }
  }

  ngOnInit() {
    window.addEventListener('resize', this.resize.bind(this));
    this.tooltip = d3.select('#pie')
                     .append('div')
                     .attr('class', 'tooltip')
                     .style('display', 'none')
                     .style('opacity', 0);
  }

  /*********** Pie Chart functionality ***************/

  constructPieChart() {
    this.svg = d3.select('#pie').select('svg');
    this.setSVGDimensions();
    this.color = d3.scaleOrdinal(d3.schemeCategory10);
    this.mainContainer = this.svg.append('g').attr('transform', `translate(${this.radius}, ${this.radius})`);
    this.pie = d3.pie().sort(null).value((d: any) => d.value);
    this.draw();
  }

  resize() {
    this.setSVGDimensions();
    this.setArcs();
    this.repaint();
    this.drawLabels();

    if (this.barwidth) {
      this.constructBarChart();
    }
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
      .attr('text-anchor', 'middle')
      .attr('transform', d => `translate(${this.arcLabel.centroid(d)})`)
      .attr('dy', '0.35em');
    this.texts.append('tspan')
              .filter(d => (d.endAngle - d.startAngle) > 0.05)
              .attr('x', 0).attr('y', 0).style('font-weight', 'bold')
              .text(d => d.data.skill)
              .attr('fill', 'white');
    this.texts.append('tspan')
              .filter(d => (d.endAngle - d.startAngle) > 0.25)
              .attr('x', 0).attr('y', '1.3em').attr('fill-opacity', 0.7)
              .text(d => d.data.value)
              .attr('fill', 'white');
  }

  drawSlices() {
    const animationDuration = 750;
    const t = d3.transition().duration(animationDuration);

    this.slices = this.mainContainer.selectAll('path')
      .remove().exit()
      .data(this.pie(this.dataSource))
      .enter().append('g').append('path')
      .attr('d', this.arc)
      .attr('fill', this.themeColor)
      .attr('fill-opacity', (d) => {
        if (d.data.value >= 9) {
          return '0.9';
        } else if (d.data.value >= 8) {
          return '0.7';
        } else if (d.data.value >= 6) {
          return '0.5';
        }

        return '0.3';
      })
      .on('mousemove', function(s) {
        this.tooltip .style('top', (d3.event.layerY + 15) + 'px').style('left', (d3.event.layerX) + 'px')
          .style('display', 'block').style('opacity', 1);
        this.tooltip.html(`skill: ${s.data.skill}<br>Level of Knowledge: ${s.data.value} / 10`);
      }.bind(this))
      .on('mouseout', function() {
        this.tooltip.style('display', 'none').style('opacity', 0);
      }.bind(this));
  }

  /*********** Bar Chart functionality ***************/

  constructBarChart() {
    const chart = d3.select('.chart')
                    .attr('width', this.barwidth)
                    .attr('height', parseInt(this.barContainer.nativeElement.offsetHeight, 10));
    const bar = chart.selectAll('g')
                     .data(this.barChartData)
                     .enter().append('g')
                     .attr('transform', (d, i) => {
                      return 'translate(0,' + ((i * (this.barHeight + 45)) + 20) + ')';
                     });

    bar.append('text')
        .attr('x', 0)
        .attr('y', - (this.barHeight / 2))
        .attr('dy', '.35em')
        .attr('fill', 'white')
        .text((d) => {
          return d.name;
        });
    bar.append('rect')
        .attr('x', 3)
        .attr('width', this.barwidth - 8)
        .attr('stroke', this.themeColor)
        .attr('stroke-width', '3px')
        .attr('stroke-linecap', 'round')
        .attr('stroke-linejoin', 'round')
        .attr('fill', this.themeColor)
      .attr('fill-opacity', '0.4')
      .attr('class', 'opacity-rect')
      .attr('height', (this.barContainer.nativeElement.offsetHeight / this.barChartData.length) - 36.52);

    bar.append('rect')
      .attr('width', (d) => {
        return (d.workLevel / 100) * this.barwidth;
      })
      .attr('fill', this.themeColor)
      .attr('height', (this.barContainer.nativeElement.offsetHeight / this.barChartData.length) - 36.52);

    bar.append('text')
      .attr('x', this.barwidth - 50)
      .attr('y', this.barHeight / 2)
      .attr('dy', '.35em')
      .attr('font-weight', 'bold')
      .attr('fill', 'white')
      .text((d) => {
        return d.workLevel + '%';
      });

    bar.selectAll('rect')
      .on('mousemove', function(s) {
        this.tooltip .style('top', (d3.event.layerY + 15) + 'px').style('left', (d3.event.layerX) + 'px')
          .style('display', 'block').style('opacity', 1);
        this.tooltip.html(`${s.workLevel}% of time spent on <br>${s.name} `);
      }.bind(this))
      .on('mouseout', function() {
        this.tooltip.style('display', 'none').style('opacity', 0);
      }.bind(this));
  }
}
