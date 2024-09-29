import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  cards = [
    {
      title: 'SolverHub - IT Agency',
      description: 'SolverHub is an IT agency delivering innovative solutions, specializing in web development, design, and digital transformation to drive impactful results for businesses.',
      image: 'assets/projects/bussinessagency.png',
      video: 'assets/projects/solver-hub.mp4',
      buttonText: 'Video Demo'
    },
    {
      title: 'Weather App',
      description: 'A sleek weather app showcasing real-time forecasts, intuitive design, and my expertise in building responsive and user-friendly applications.',
      image: 'assets/projects/educationweb.png',
      video: 'assets/projects/weather-app.mp4',
      buttonText: 'Video Demo'
    },
    {
      title: 'MeCare',
      description: 'Mecare is a medical website offering easy access to healthcare resources, expert advice, and seamless appointment scheduling.',
      image: 'assets/projects/medicalwebsite.png',
      video: 'assets/projects/mecaref.mp4',
      buttonText: 'Video Demo'
    },
    {
      title: 'Netflix Clone',
      description: 'A Netflix clone showcasing my ability to build a responsive streaming platform with dynamic content and a user-friendly interface.',
      image: 'assets/projects/netflixclone.jpg',
      video: 'assets/projects/netflix.mp4',
      buttonText: 'Video Demo'
    },
    {
      title: 'Realtors Hub',
      description: 'Realtors Hub is a real estate website offering seamless property browsing, expert insights, and easy connections with trusted agents.',
      image: 'assets/projects/real estate.png',
      video: 'assets/projects/realtorshubb.mp4',
      buttonText: 'Video Demo'
    },
    {
      title: 'LightHouse Cafe',
      description: 'Lighthouse Cafe is a restaurant website featuring a delicious menu, easy online reservations, and a warm, inviting dining experience.',
      image: 'assets/projects/restaurant.jpg',
      video: 'assets/projects/lighthouse.mp4',
      buttonText: 'Video Demo'
    },
    {
      title: 'Blogs By Sidra',
      description: 'Blogs By Sidra is a clean and modern blogging website UI designed to showcase engaging content with a user-friendly and visually appealing layout',
      image: 'assets/projects/blogs.webp',
      video: 'assets/projects/blogs-by-sidra.mp4',
      buttonText: 'Video Demo'
    },
    {
      title: 'Random Color Generator',
      description: 'A Random Color Generator that allows users to generate random colors and easily copy their hex codes to the clipboard for quick use in design or development projects.',
      image: 'assets/projects/random-cg.png',
      video: 'assets/projects/rcg.mp4',
      buttonText: 'Video Demo'
    }
  ];

  isModalOpen = false;
  selectedCardIndex: number = 0;

  openModal(index: number) {
    this.selectedCardIndex = index;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  getVideoSrc(index: number): string {
    return this.cards[index].video;
  }

}
