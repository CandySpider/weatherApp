import { Injectable } from '@angular/core';
import { fetchWeatherApi } from 'openmeteo';
import { range } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  
  constructor() {  }

  async getWeather(): Promise<string> {
    const params = {
      "latitude": 37.98,
      "longitude": 23.72,
      "hourly": "temperature_2m"
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    let responses,response;

    try {
      responses =  await fetchWeatherApi(url, params);
      response = responses[0];
      const range = (start: number, stop: number, step: number) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
      const utcOffsetSeconds = response.utcOffsetSeconds();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const latitude = response.latitude();
const longitude = response.longitude();

const hourly = response.hourly()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {

	hourly: {
		time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
			(t) => new Date((t + utcOffsetSeconds) * 1000)
		),
		temperature2m: hourly.variables(0)!.valuesArray()!,
	}, 

};

// `weatherData` now contains a simple structure with arrays for datetime and weather data
for (let i = 0; i < weatherData.hourly.time.length; i++) {
	console.log(
		weatherData.hourly.time[i].toISOString(),
		weatherData.hourly.temperature2m[i]
	);
}
    
    } catch (e) {
      console.error('Error fetching data:', e);
    }


    return 'Hello';
  }

}
