import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MeteoService } from './meteo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
