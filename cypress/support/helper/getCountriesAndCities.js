
// This file is mainly created to insert countries and cities because faker.js does not provide related information.
import { Country, City } from "country-state-city";

class CountryAndCity {
  constructor() {
    const countries = Country.getAllCountries();
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    const cities = City.getCitiesOfCountry(randomCountry.isoCode);
    const randomCity = cities[Math.floor(Math.random() * cities.length)];

    this.country = randomCountry.name;
    this.city = randomCity.name;
  }
}

export const countryAndCity = new CountryAndCity();
