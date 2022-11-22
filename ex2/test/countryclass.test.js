import { Country } from '../src/countries.js';

describe('Country Unit Test', () => {
  it('should return true if country speaks German', () => {
    const country = new Country('Germany', ['de']);
    expect(country.speakGerman()).toBe(true);
  });

  it('should return true if country speaks German', () => {
    const country = new Country('Germany', ['de', 'en']);
    expect(country.speakGerman()).toBe(true);
  });

  it('should return false if country does not speak German', () => {
    const country = new Country('Germany', ['en']);
    expect(country.speakGerman()).toBe(false);
  });
});
