import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      imgSrc: 'assets/services/webdev.png',
      alt: 'responsive',
      title: 'Responsive Design',
      description: 'Creating responsive websites that look great on any device, providing a smooth and user-friendly experience, from phones to desktops.'
    },
    {
      imgSrc: 'assets/services/web.png',
      alt: 'web-dev',
      title: 'Web Development',
      description: 'Specialized in crafting responsive and user-centric websites that not only look stunning but also perform seamlessly, helping your business thrive online.'
    },
    {
      imgSrc: 'assets/services/graphicdesigning.png',
      alt: 'graphic-designing',
      title: 'Graphic Designing',
      description: 'Elevate your brand with expert Graphic design services, where innovative design meets your unique vision to create compelling visuals and stunning impressions.'
    }
  ];
}
