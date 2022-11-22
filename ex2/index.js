import { Countries } from './src/countries.js';
import countriesData from './data.json' assert { type: 'json' };

const countries = new Countries(countriesData);
console.log('Number of Countries: ' + countries.getNumberOfCountries());
console.log(
  'Country with the most official languages speaking German: ' +
    countries.getCountryWithMostLanguagesSpokingGerman().country,
);
console.log(
  'Counts all the official languages spoken: ' +
    countries.getNumberOfUniqueSpokenLanguages(),
);
console.log(
  'Country with the highest number of official languages: ' +
    countries.getCountryWithMostLanguages().country,
);
console.log(
  'The most common official language(s), of all countries: ' +
    countries.getMostCommonOfficialLanguages(),
);
