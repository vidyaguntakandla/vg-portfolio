import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks = [
    { label: 'About me',
      url: '/about-me'
    },
    {
      label: 'Professional',
      url: '/skills'
    },
    {
      label: 'Experience',
      url: '/experience'
    },
    {
      label: 'Education',
      url: '/education'
    },
    {
      label: 'Contact',
      url: '/contact-deatils'
    },
  ];
  showNavBar = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavBar() {
    this.showNavBar = !this.showNavBar;
  }

  onNavLinkClick(event) {
    this.showNavBar = false;
    event.stopPropagation();
  }
}
