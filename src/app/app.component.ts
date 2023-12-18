import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MeteoService } from './services/meteo.service';
import { TileComponent } from "./tile/tile.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TileComponent]
})
export class AppComponent {
  title = 'weatherApp';
  constructor(private meteoService:MeteoService){}
   onClick(): void {
  
      try{
        console.log(1);
      console.log(this.meteoService.getWeather());
      }
      catch (error)
      {
        console.error('Error getting the needed data', error);
      }
    }
}
