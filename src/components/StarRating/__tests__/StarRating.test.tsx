import React from 'react';
import {render} from '@testing-library/react-native';
import {StarRating} from '../StarRating';

describe('StarRating', () => {
  it('should render the component', () => {
    render(<StarRating rating={{average: 5}} />);
  });
});
