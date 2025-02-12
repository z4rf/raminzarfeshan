import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  standalone: false,
  
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  isWorkOpen: boolean = false;
  isEduOpen: boolean = false;
  isCertOpen: boolean = false;
  isSkillOpen: boolean = false;

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle("Ramin Zarfeshan - Resume");
  }

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Resume_2025.pdf');
    link.setAttribute('download', 'RaminZarfeshan.pdf');
    link.click();
    link.remove();
  }
}
