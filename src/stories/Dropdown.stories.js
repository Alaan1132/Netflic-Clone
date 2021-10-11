import { Dropdown, Icon } from '../components';
import { options } from '../constants';

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  subcomponents: { Icon },
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      options: options.sizes,
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const SelectLanguage = Template.bind({});
