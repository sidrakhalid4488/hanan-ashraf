import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { HeroSectionComponent } from '../components/hero-section/hero-section.component';
import { AboutComponent } from '../components/about/about.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ServicesComponent } from '../components/services/services.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactComponent } from '../components/contact/contact.component';
import { UtilityServiceService } from '../services/utility-service.service';
import * as AOS from 'aos';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,HeroSectionComponent,AboutComponent,SkillsComponent,ServicesComponent,ProjectsComponent,ContactComponent,TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  activeSection = 'header';
  constructor(private utilityService: UtilityServiceService) {}

  onOptionSelected(sectionId: string) {
    this.utilityService.scrollToElement(sectionId);
    this.activeSection = sectionId;
  }
  ngOnInit() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true, // Animation occurs only once, remove if you want to animate every time
    });
  
    // Refresh AOS to ensure all sections trigger animations
    setTimeout(() => {
      AOS.refresh(); // Reinitializes and ensures all sections are animated
    }, 500); // Small delay to make sure content has rendered
  }
  
}
