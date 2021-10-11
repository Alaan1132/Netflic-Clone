import { Picture } from '../components';

export default {
  title: 'Atoms/Picture',
  component: Picture,
  args: {
    src: 'https://picsum.photos/id/1033/400/400',
    width: 200,
  },
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
  },
};

const Template = (args) => <Picture {...args} />;

export const Default = Template.bind({});
