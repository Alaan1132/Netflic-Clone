import { options } from '../../constants';
import { Icon } from '../../components/atoms/Icons';

export default {
  title: 'Atoms/Buttons',
  subcomponents: { Icon },
  args: {
    size: 'md',
  },
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

export * from './Button.stories';

export * from './IconButton.stories';
