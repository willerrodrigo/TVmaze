import React from 'react';
import {EpisodeList} from '../EpisodeList';
import {mocks} from './mocks';
import {showService} from '../../../../../services/show/showService';
import {render} from 'test-utils';

describe('EpisodeList', () => {
  it('should render all episodes of season 1', async () => {
    jest.spyOn(showService, 'getEpisodes').mockResolvedValue({
      seasonNames: ['1', '2'],
      seasons: {
        1: [mocks.episode1, mocks.episode2],
        2: [mocks.episode22, mocks.episode23],
      },
    });
    const {findByText, getByText} = render(<EpisodeList show={mocks.show} />);

    await findByText(mocks.episode1.name);

    expect(getByText(mocks.episode1.name)).toBeTruthy();
    expect(getByText(mocks.episode2.name)).toBeTruthy();
  });
});
