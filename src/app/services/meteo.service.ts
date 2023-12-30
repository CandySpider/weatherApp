import { Injectable } from '@angular/core';
import { fetchWeatherApi } from 'openmeteo';
import { range } from 'rxjs';
import { WeatherData } from '../shared/types';
@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor() { }

  async getWeather(): Promise<WeatherData> {

    return new Promise<WeatherData>(async (resolve, reject) => {
    const params = {
      "latitude": 37.98,
      "longitude": 23.72,
      "hourly": ["temperature_2m", "relative_humidity_2m", "visibility"]
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    let responses, response;
    let myWeatherData: WeatherData;

    try {
      responses = await fetchWeatherApi(url, params);
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
     myWeatherData = {

        hourly: {
          time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
            (t) => new Date((t + utcOffsetSeconds) * 1000)
          ),
          temperature2m: hourly.variables(0)!.valuesArray() as Float32Array,
          relativeHumidity2m: hourly.variables(1)!.valuesArray()! as Float32Array,
		      visibility: hourly.variables(2)!.valuesArray()! as Float32Array
        },

      };

      resolve(myWeatherData);

    } catch (e) {
      console.error('Error fetching data:', e);
      reject(e);
    }

    });


  }

}
