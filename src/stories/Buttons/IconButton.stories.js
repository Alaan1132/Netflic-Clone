import { IconButton } from '../../components';
import { options } from '../../constants';

const argTypes = {
  iconColor: {
    options: options.colors,
    control: { type: 'select' },
  },
  iconName: {
    options: options.names,
    control: { type: 'select' },
  },
  isRounded: {
    control: { type: 'boolean' },
  },
};

const Template = (args) => <IconButton {...args} />;

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  type: 'primary',
  iconName: 'caretDown',
  iconColor: 'inverted',
  isRounded: true,
};
ButtonWithIcon.argTypes = {
  ...argTypes,
};

export const ButtonWithIconAndLabel = Template.bind({});
ButtonWithIconAndLabel.args = {
  type: 'primary',
  label: 'Comenzar',
  iconName: 'caretDown',
  iconColor: 'inverted',
  isRounded: false,
};
ButtonWithIconAndLabel.argTypes = {
  ...argTypes,
};
