export type Destination = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export type BlogTypes = {
  src: string;
  title: string;
  description: string;
};

export interface WeatherData {
  temperature: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  feelsLike: number;
  condition: string;
  airQuality: { aqi: number } | null;
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

export interface UnsplashPhotos {
  id: string;
  url: string;
  description: string;
  location: string;
}
