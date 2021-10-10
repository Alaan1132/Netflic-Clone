import { IconButton } from '../components/atoms/Buttons';
import { Icon } from '../components/atoms/Icons';
import { options } from '../constants';

export default {
  title: 'Atoms/Buttons',
  component: IconButton,
  subcomponents: { Icon },
  argTypes: {
    type: {
      options: options.types,
      control: { type: 'select' },
    },
    size: {
      options: options.sizes,
      control: { type: 'select' },
    },
    iconName: {
      options: options.names,
      control: { type: 'select' },
    },
    iconColor: {
      options: options.colors,
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <IconButton {...args} />;

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  type: 'primary',
  iconColor: 'inverted',
  isRounded: true,
};

export const ButtonWithIconAndLabel = Template.bind({});
ButtonWithIconAndLabel.args = {
  type: 'primary',
  iconColor: 'inverted',
  isRounded: false,
  label: 'Comenzar',
};
