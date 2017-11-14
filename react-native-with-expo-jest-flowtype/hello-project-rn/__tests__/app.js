import 'react-native';
import React from 'react';
import App from '../src/app';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  /* eslint-disable no-unused-vars */
  const tree = renderer.create(
    <App />
  );
  /* eslint-enable no-unused-vars */
});
