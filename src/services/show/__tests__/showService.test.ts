import {api} from '../../api';
import {showService} from '../showService';
import {episode1, episode2, episode22, episode23, episodeList} from './mocks';

describe('showService', () => {
  describe('getEpisodes', () => {
    beforeAll(() => {
      jest.spyOn(api, 'get').mockResolvedValue({data: episodeList});
    });
    it('should return grouped episodes by season', async () => {
      const showId = '1';
      const {seasons} = await showService.getEpisodes(showId);

      const season1 = seasons[1];
      const season2 = seasons[2];

      expect(season1.includes(episode1)).toBeTruthy();
      expect(season1.includes(episode2)).toBeTruthy();
      expect(season2.includes(episode22)).toBeTruthy();
      expect(season2.includes(episode23)).toBeTruthy();
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
