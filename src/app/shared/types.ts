export interface WeatherData {
    hourly: {
      time: Date[];
      temperature2m: Float32Array;
      relativeHumidity2m: Float32Array;
      visibility: Float32Array;
     
    };
  }