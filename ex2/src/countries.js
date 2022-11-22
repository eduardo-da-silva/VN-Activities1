export class Country {
  constructor(country, languages) {
    this.country = country;
    this.languages = languages;
  }

  speakGerman() {
    return this.languages.includes('de');
  }
}

export class Countries {
  constructor(countries) {
    this.countries = [];
    for (const country of countries) {
      this.countries.push(new Country(country.country, country.languages));
    }
  }

  getCountries = () => this.countries;
  getNumberOfCountries = () => this.countries.length;
  getCountryWithMostLanguagesSpokingGerman = () => {
    return this.countries.reduce((prev, current) =>
      prev.languages.length > current.languages.length && prev.speakGerman()
        ? prev
        : current,
    );
  };
  getNumberOfUniqueSpokenLanguages = () => {
    return new Set(
      this.countries.reduce(
        (acc, country) => [...acc, ...country.languages],
        [],
      ),
    ).size;
  };
  getCountryWithMostLanguages = () => {
    return this.countries.reduce((prev, current) =>
      prev.languages.length > current.languages.length ? prev : current,
    );
  };
  getListOfMostSpokenLanguages = () => {
    const languages = this.countries.reduce((acc, country) => {
      country.languages.forEach((language) => {
        if (acc[language]) {
          acc[language] += 1;
        } else {
          acc[language] = 1;
        }
      });
      return acc;
    }, {});
    const higher = Object.keys(languages).reduce((prev, current) =>
      languages[prev] > languages[current] ? prev : current,
    );
    return Object.keys(languages).filter(
      (language) => languages[language] === languages[higher],
    );
  };

  getMostCommonOfficialLanguages = () => {
    const languages = this.countries.reduce((acc, country) => {
      country.languages.forEach((language) => {
        if (acc[language]) {
          acc[language] += 1;
        } else {
          acc[language] = 1;
        }
      });

      return acc;
    }, {});

    const higher = Object.keys(languages).reduce((prev, current) =>
      languages[prev] > languages[current] ? prev : current,
    );
    return Object.keys(languages).filter(
      (language) => languages[language] === languages[higher],
    );
  };
}
