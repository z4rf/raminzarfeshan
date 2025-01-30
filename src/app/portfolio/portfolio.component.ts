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

  projects = {} as Project[];

  isCollapsed: boolean = true;
  filtering: boolean = false;

  typeScript: boolean = false;
  angular: boolean = false;
  python: boolean = false;
  
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  constructor(private titleService: Title,private projectService: ProjectsService) {
    this.titleService.setTitle("Ramin Zarfeshan - Portfolio");
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typeScript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }

    if (this.typeScript || this.angular || this.python) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters() {
    this.angular = false;
    this.typeScript = false;
    this.python = false;

    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
