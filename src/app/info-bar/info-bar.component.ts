import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-bar.component.html',
  styleUrl: './info-bar.component.css'
})
export class InfoBarComponent {
  @Input() name: string = 'value:';
  @Input() value: number = 0.0;
  @Input() unit: string = 'unit';



}
