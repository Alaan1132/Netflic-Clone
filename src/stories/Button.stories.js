import React from 'react';

import { Button } from '../atoms/Buttons/Button';
import { options } from '../constants';

export default {
  title: 'Atoms/Buttons',
  component: Button,
  args: {
    children: 'Comenzar',
  },
  argTypes: {
    type: {
      options: options.types,
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'primary',
};

export const Types = (args) => (
  <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end' }}>
    {options.types.map((type) => (
      <Button type={type} {...args} />
    ))}
  </div>
);
