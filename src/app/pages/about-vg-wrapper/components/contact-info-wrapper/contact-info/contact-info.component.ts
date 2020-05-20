import { Component, OnInit, ViewChild } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  @ViewChild('flex', {static: false}) flex: any;
  currentSlideIndex = 0;

  slides: any = [
    {
      headline: 'Personal Info',
      content: {
        'Full Name': 'Vidya Guntakandla',
        'Mobile Number': '+1 (919)-986-0116',
        'Email Id': 'vidya.guntakandla@gmail.com'
      },
      details: 'You can view my profile in JobCase and LinkedIn'
    },
    {
      headline: 'Me',
      content: {},
      image: {
        src: '/assets/me.JPG',
        alt: 'Vidya Guntakandla\'s photo'
      }
    },
    {
      headline: 'Profile Information',
      content: {
        'Skype Id': 'vidyaguntakandla',
        'Current Location': 'Westborough, MA - 01581'
      },
      details: 'Please feel free to contact me via any of the details provided here for more information.'
    }
  ];

  constructor() { }

  ngOnInit() {}

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

  onSlideButtonClick() {
    if (this.currentSlideIndex === 2) {
      this.currentSlideIndex = 0;
    } else {
      this.currentSlideIndex += 1;
    }

    for (const element of this.flex.nativeElement.children) {
      if (parseInt(element.getAttribute('index'), 10) === this.currentSlideIndex) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    }
  }
}
