import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { style, animate, animation } from '@angular/animations';


// =========================
// Fade
// =========================
const fadeIn = animation([
  style({ opacity: 0 }), // start state
  animate(
    '{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    style({ opacity: 1 })
  )
]);

const fadeOut = animation([
  animate(
    '{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    style({ opacity: 0 })
  )
]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition('void => fade', [
        useAnimation(fadeIn, { params: { time: '500ms' } })
      ]),
      transition('fade => void', [
        useAnimation(fadeOut, { params: { time: '500ms' } })
      ])
    ])
  ]
})

export class CarouselComponent implements OnInit {
  @Input() slides: any;
  currentSlide = 0;

  constructor() {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  onIndicatorClick(index) {
    this.currentSlide = index;
  }

  ngOnInit() { }
}
