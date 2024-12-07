export type Destination = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export type Feature = {
  src: string;
  title: string;
  description: string;
};

export interface AirQuality {
  aqi: number;
}

export interface WeatherData {
  temperature: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  airQuality: AirQuality;
}

export interface Country {
  name: {
    common: string;
    official: string;
  };
  flag: string;
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  area: number;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  latlng: [number, number];
  capitalInfo: {
    latlng: [number, number];
  };
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  borders: string[];
  independent: boolean;
  unMember: boolean;
  timezones: string[];
}
