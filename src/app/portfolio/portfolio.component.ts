import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  project: Project = {
    id: 0,
    name: 'Sample Angular App',
    description: 'sample description blah blah',
    projectLink: '',
    tags: ['Angular', 'Typescript'],
    pictures: []
  };

  constructor(private titleService: Title) {
    this.titleService.setTitle("Ramin Zarfeshan - Portfolio");
  }
}
