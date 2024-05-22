import React from 'react';
import { render } from '@testing-library/react-native';
import { EpisodeList } from '../EpisodeList';
import { mocks } from './mocks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { showService } from '../../../../../services/show/showService';

const queryClient = new QueryClient({ defaultOptions: { queries: { cacheTime: Infinity } } })
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('EpisodeList', () => {
  it('should render all episodes of season 1', async () => {
    jest.spyOn(showService, 'getEpisodes').mockResolvedValue({ 
      seasonNames: ['1', '2'], 
      seasons: { 1: [mocks.episode1, mocks.episode2], 2: [mocks.episode22, mocks.episode23] } 
    });
    const { findByText, getByText } = render(<EpisodeList show={mocks.show} />, { wrapper });
    
    await findByText(mocks.episode1.name);

    expect(getByText(mocks.episode1.name)).toBeTruthy();
    expect(getByText(mocks.episode2.name)).toBeTruthy();
  });
});
