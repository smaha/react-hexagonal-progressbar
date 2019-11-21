/**
 *
 * Tests for HexagonalProgress
 *
 */

import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import HexagonalProgress from '../index';
import ReactDOM from 'react-dom';

describe('<HexagonalProgress />', () => {
  const props = {
    value: 30,
    color: 'green',
  };
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<HexagonalProgress {...props} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render hexagon with level badge', () => {
    const { getByText } = render(<HexagonalProgress {...props} level={5} />);
    expect(getByText('5')).toBeTruthy();
  });
  
  it('Should render a image', () => {
    const { container } = render(<HexagonalProgress {...props} badgeImg="path_img.svg" />);
    expect(container.querySelector('image')).toBeTruthy();
  });
});
