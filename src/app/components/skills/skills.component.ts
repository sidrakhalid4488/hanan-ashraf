import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    {
      imgSrc: '/assets/skills/html.png',
      title: 'HTML'
    },
    {
      imgSrc: '/assets/skills/css.png',
      title: 'CSS'
    },
    {
      imgSrc: '/assets/skills/bootstrap.png',
      title: 'Bootstrap'
    },
    {
      imgSrc: '/assets/skills/tw.png',
      title: 'TailwindCSS'
    },
    {
      imgSrc: '/assets/skills/angular.svg',
      title: 'Angular'
    },
    {
      imgSrc: '/assets/skills/js.png',
      title: 'JavaScript'
    },
    {
      imgSrc: '/assets/skills/ts.png',
      title: 'TypeScript'
    },
    {
      imgSrc: '/assets/skills/react.png',
      title: 'ReactJS'
    },
    {
      imgSrc: '/assets/skills/rd.png',
      title: 'Responsive Designs'
    },
    {
      imgSrc: '/assets/skills/cplus.png',
      title: 'C++'
    },
    {
      imgSrc: '/assets/skills/sql.png',
      title: 'SQL'
    },
    {
      imgSrc: '/assets/skills/github.png',
      title: 'Git/Github'
    },
    {
      imgSrc: '/assets/skills/scss.png',
      title: 'SCSS'
    },
  ];
}
