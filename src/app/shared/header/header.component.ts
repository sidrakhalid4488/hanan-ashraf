import { Component } from '@angular/core';
import { UtilityServiceService } from '../../services/utility-service.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  activeSection = 'home';
  constructor(private utilityService: UtilityServiceService) {}

  onOptionSelected(sectionId: string) {
    this.utilityService.scrollToElement(sectionId);
    this.activeSection = sectionId;
  }

  MenuItems = [
    { label: 'Home', route: 'home' },
    { label: 'About', route: 'about' },
    { label: 'Skills', route: 'skills' },
    { label: 'Services', route: 'services' },
    { label: 'Testimonials', route: 'projects' },
    { label: 'Contact', route: 'contact' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
