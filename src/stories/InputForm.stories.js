import { InputForm } from '../components/atoms/Input';
import { options } from '../constants';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Atoms/Input',
  component: InputForm,
  argTypes: {
    type: {
      options: options.inputTypes,
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <InputForm handleInputChange={action('onchange')} {...args} />;

export const Default = Template.bind({});

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  name: 'email',
};

export const EmailOrNumber = Template.bind({});
EmailOrNumber.args = {
  type: 'text',
  name: 'emailOrPhone',
  label: 'Insert your email or number',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  name: 'password',
};

export const Dark = Template.bind({});
Dark.args = {
  variant_dark: true,
};
