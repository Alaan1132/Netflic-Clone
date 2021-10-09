import { Checkbox } from '../components/atoms/Checkbox';
import { options } from '../constants';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      options: options.sizes,
      control: { type: 'select' },
    },
    colorIcon: {
      options: options.colors,
      control: { type: 'select' },
    },
    colorLabel: {
      options: options.colors,
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
