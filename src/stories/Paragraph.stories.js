import React from 'react';

import { Paragraph } from '../components/atoms/Paragraph';
import { options } from '../constants';

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
  args: {
    children: 'Hello World',
    size: 'md',
    color: 'base',
    weight: 'normal',
  },
  argTypes: {
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

const Template = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});

export const Sizes = ({ size, ...args }) => (
  <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end' }}>
    <Paragraph size="sm" {...args} />
    <Paragraph size="md" {...args} />
    <Paragraph size="lg" {...args} />
  </div>
);
