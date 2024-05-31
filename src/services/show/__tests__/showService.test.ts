import {showMocks} from 'tests/mocks/showMocks';
import {showService} from '../showService';

describe('showService', () => {
  describe('getEpisodes', () => {
    it('should return grouped episodes by season', async () => {
      const showId = '1';
      const {seasons} = await showService.getEpisodes(showId);

      const season1 = seasons[1];
      const season2 = seasons[2];

      expect(season1[0]).toEqual(showMocks.episode1);
      expect(season1[1]).toEqual(showMocks.episode2);
      expect(season2[0]).toEqual(showMocks.episode22);
      expect(season2[1]).toEqual(showMocks.episode23);
    });

    it('should return all season names', async () => {
      const showId = '1';
      const {seasonNames} = await showService.getEpisodes(showId);

      expect(seasonNames.includes('1')).toBeTruthy();
      expect(seasonNames.includes('2')).toBeTruthy();
      expect(seasonNames.length).toEqual(2);
    });
  });
});
