import {rest} from 'msw';
import {BASE_URL} from 'src/services/api';
import {showMocks} from 'tests/mocks/showMocks';

export const handlers = [
  rest.get(`${BASE_URL}shows/:showId/episodes`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(showMocks.episodeList));
  }),
];
