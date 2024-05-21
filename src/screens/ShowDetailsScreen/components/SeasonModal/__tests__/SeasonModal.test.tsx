import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {SeasonModal} from '../SeasonModal';
import {Modalize} from 'react-native-modalize';
import {act} from 'react-test-renderer';

describe('SeasonModal', () => {
  it('should render all seasons', () => {
    const modalizeRef = React.createRef<Modalize>();

    const {getAllByText} = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={() => {}}
        seasons={['1', '2', '3']}
        selectedSeason="1"
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    expect(getAllByText(/season/i).length).toBe(3);
  });

  it('should select a season', () => {
    const modalizeRef = React.createRef<Modalize>();
    const onSelectSeason = jest.fn();
    const selectedSeason = '1';
    const {getByText} = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={onSelectSeason}
        seasons={['1', '2', '3']}
        selectedSeason={selectedSeason}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    const seasonText = `season ${selectedSeason}`;
    const seasonElement = getByText(new RegExp(seasonText, 'i'));
    fireEvent.press(seasonElement);
    expect(onSelectSeason).toHaveBeenCalledWith('1');
  });
});
