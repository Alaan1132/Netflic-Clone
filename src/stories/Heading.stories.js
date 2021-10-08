import React from 'react';

import { Heading } from '../atoms/Heading/Heading';
import { options } from '../constants';

export default {
  title: 'Atoms/Heading',
  component: Heading,
  args: {
    children: 'Hello',
    tag: 'h1',
    color: 'base',
    weight: 'bold',
  },
  argTypes: {
    tag: {
      options: options.tags,
      control: { type: 'select' },
    },
    size: {
      options: options.sizes,
      control: { type: 'select' },
    },
    color: {
      options: options.colors,
      control: { type: 'select' },
    },
    weight: {
      options: options.weights,
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
