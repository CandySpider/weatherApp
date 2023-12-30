import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBarComponent } from "../info-bar/info-bar.component";
import { WeatherData } from '../shared/types';
import { empty } from 'rxjs';

@Component({
    selector: 'app-tile',
    standalone: true,
    templateUrl: './tile.component.html',
    styleUrl: './tile.component.css',
    imports: [CommonModule, InfoBarComponent]
})
export class TileComponent {
   @Input() title: string ="Tile";
   @Input() High: number = 0;
   @Input() Low: number = 0;
   @Input() Humidity: number = 0;
   @Input() Visibility: number = 0;
   
}
