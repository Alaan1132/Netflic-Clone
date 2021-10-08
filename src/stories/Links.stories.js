import React from 'react';

import { Link } from '../atoms/Links';
import { options } from '../constants';

export default {
  title: 'Atoms/Links',
  component: Link,
  argTypes: {
    type: {
      options: options.types,
      control: { type: 'select' },
    },
    size: {
      options: options.sizes,
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Link',
};

export const SignUp = Template.bind({});
SignUp.args = {
  children: 'Iniciar sesion',
};
