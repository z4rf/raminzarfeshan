import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proj-card',
  standalone: false,
  
  templateUrl: './proj-card.component.html',
  styleUrl: './proj-card.component.css'
})
export class ProjCardComponent {
  @Input() projectName: string = "Default Project";
}
