import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import '../src/styles/globals.css';
import '../src/styles/tokens.css';

addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
