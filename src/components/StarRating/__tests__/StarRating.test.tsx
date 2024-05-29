import React from 'react';
import {StarRating} from '../StarRating';
import {render} from 'test-utils';

describe('StarRating', () => {
  describe('when there is no rating', () => {
    it('should not render the component', () => {
      const {root} = render(<StarRating />);
      expect(root).toBeUndefined();
    });
  });

  describe('when there is a rating', () => {
    it('should render the average text', () => {
      const rating = {average: 3.5};
      const {getByText} = render(<StarRating rating={rating} />);
      expect(getByText('3.5')).toBeTruthy();
    });

    it('should render the star icon', () => {
      const rating = {average: 3.5};
      const {getByTestId} = render(<StarRating rating={rating} />);
      expect(getByTestId('star-icon')).toBeTruthy();
    });
  });
});
