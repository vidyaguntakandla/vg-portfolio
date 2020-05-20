import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  gridContent: Array<object> = [
    {
      contentLogo: '/assets/backgrounds/smart-coding.png',
      title: 'Smart Coding',
      description: 'I believe in motto that \'Clarity is King\'. I support by writing complex and maintainable code by following \
                    w3c standards. I am very passionate in writing clean and generic reusable code to improve understandability. \
                    My leadership with positive reinforcement took to me the next level with great motivation.'
    },
    {
      contentLogo: '/assets/backgrounds/interaction-icon.png',
      title: 'Intelligent Interaction',
      description: 'Communication is the most interpersonal skill every developer should have. \
                    Interacting is something which helped me in working with my clients and bussiness owners. \
                    Capturing conflicts, Managing constructive criticism, Problem-solving are some major factors \
                    that I improved with great communication.'
    },
    {
      contentLogo: '/assets/backgrounds/support-icon.jpeg',
      title: '24/7 Support',
      description: 'Being available to the team when needed is very much important to support the whole applications. \
                    When team is working towards a shared purpose and common goals, it is very important to apply \
                    our perspectives, experience, and skills to solve complex problems in production. '
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
