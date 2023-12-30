import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MeteoService } from './services/meteo.service';
import { TileComponent } from "./tile/tile.component";
import { WeatherData } from './shared/types';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TileComponent]
})
export class AppComponent {
  title = 'weatherApp';
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  daysOfWeek: number[] = [0, 1, 2, 3, 4, 5, 6] ;
  daysHigh: number[] = [-100, -100, -100, -100, -100, -100, -100];
  daysLow: number[] = [100, 100, 100, 100, 100, 100, 100];
  daysHumidity: number[] = [0, 0, 0, 0, 0, 0, 0];
  daysVisibility: number[] = [0, 0, 0, 0, 0, 0, 0];
  constructor(private meteoService:MeteoService){

    try{
      this.meteoService.getWeather().then((myWeatherData) => {
        this.daysOfWeek = [];
       // `weatherData` now contains a simple structure with arrays for datetime and weather data
       for (let i = 0; i < myWeatherData.hourly.time.length; i++) {
         let day = myWeatherData.hourly.time[i].getDay();
         if(this.daysOfWeek.indexOf(day) == -1)
          this.daysOfWeek.push(day);

          let tempNum : number,tempNum2 : number,tempNum3 : number;
           tempNum = Number(myWeatherData.hourly.temperature2m[i].toFixed(2));
           tempNum2 = Number(myWeatherData.hourly.relativeHumidity2m[i].toFixed(2));
           tempNum3 = Number(myWeatherData.hourly.visibility[i].toFixed(2));
            if(tempNum > this.daysHigh[day])
              this.daysHigh[day] = tempNum;

            if(tempNum < this.daysLow[day])
              this.daysLow[day] = tempNum;

            if(tempNum2 > this.daysHumidity[day])
              this.daysHumidity[day] = tempNum2;

            if(tempNum3 > this.daysVisibility[day])
              this.daysVisibility[day] = tempNum3;
       }
       console.log(this.daysHumidity);

     });
 
     }
     catch (error)
     {
       console.error('Error getting the needed data', error);
     }
  }


   onClick(): void {
  
     
    }
}
