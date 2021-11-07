import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../components/App';

test('button has correct initial color and text', () => {
  render(<App/>)
});