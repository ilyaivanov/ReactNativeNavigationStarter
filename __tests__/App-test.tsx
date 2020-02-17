/**
 * @format
 */

import 'react-native';
import * as React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
const renderer = require('react-test-renderer');

it('renders correctly', () => {
  renderer.create(<App componentId="sample" />);
});
