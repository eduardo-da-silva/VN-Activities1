import { Countries } from '../src/countries.js';

describe('Countries Unit Test', () => {
  it('should return the number of countries', () => {
    const countries = new Countries([
      { country: 'Germany', languages: ['de'] },
      { country: 'France', languages: ['fr'] },
    ]);
    expect(countries.getNumberOfCountries()).toBe(2);
  });

  it('should return the country with the most languages speaking German', () => {
    const countries = new Countries([
      { country: 'Germany', languages: ['de'] },
      { country: 'France', languages: ['fr'] },
      { country: 'Spain', languages: ['es'] },
      { country: 'Italy', languages: ['it'] },
      { country: 'Austria', languages: ['de', 'en'] },
    ]);
    expect(countries.getCountryWithMostLanguagesSpokingGerman().country).toBe(
      'Austria',
    );
  });

  it('should return the number of unique spoken languages', () => {
    const countries = new Countries([
      { country: 'Germany', languages: ['de'] },
      { country: 'France', languages: ['fr'] },
      { country: 'Spain', languages: ['es'] },
      { country: 'Italy', languages: ['it'] },
      { country: 'Austria', languages: ['de', 'en'] },
    ]);
    expect(countries.getNumberOfUniqueSpokenLanguages()).toBe(5);
  });

  it('should return the country with the most languages', () => {
    const countries = new Countries([
      { country: 'Germany', languages: ['de'] },
      { country: 'France', languages: ['fr'] },
      { country: 'Spain', languages: ['es'] },
      { country: 'Italy', languages: ['it'] },
      { country: 'Austria', languages: ['de', 'en'] },
    ]);
    expect(countries.getCountryWithMostLanguages().country).toBe('Austria');
  });

  it('should return the list of most spoken languages', () => {
    const countries = new Countries([
      { country: 'Germany', languages: ['de'] },
      { country: 'France', languages: ['fr'] },
      { country: 'Spain', languages: ['es'] },
      { country: 'Italy', languages: ['it'] },
      { country: 'Austria', languages: ['de', 'en'] },
    ]);
    expect(countries.getMostCommonOfficialLanguages()).toEqual(['de']);
  });

  it('should return the list of most spoken languages', () => {
    const countries = new Countries([
      { country: 'Germany', languages: ['de'] },
      { country: 'France', languages: ['fr'] },
      { country: 'Spain', languages: ['es'] },
      { country: 'Italy', languages: ['it', 'es'] },
      { country: 'Austria', languages: ['de', 'en'] },
    ]);
    expect(countries.getMostCommonOfficialLanguages()).toEqual(['de', 'es']);
  });
});
