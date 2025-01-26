import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  projects = {} as Project[];
  isCollapsed: boolean = true;

  constructor(private titleService: Title,private projectService: ProjectsService) {
    this.titleService.setTitle("Ramin Zarfeshan - Portfolio");
  }
}
