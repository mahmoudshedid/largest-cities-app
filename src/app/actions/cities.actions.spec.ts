import * as fromCities from './cities.actions';

describe('loadCities', () => {
  it('should return an action', () => {
    expect(fromCities.loadCities().type).toBe('[Cities] Load Cities');
  });
});
