import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgClass],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  activeTab: string = 'Experience'; // Default tab is Experience

  setActiveTab(tabName: string): void {
    this.activeTab = tabName; // Set the active tab based on the button clicked
  }
}
