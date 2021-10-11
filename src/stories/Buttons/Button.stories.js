import { Button } from '../../components';
import { options } from '../../constants';

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'primary',
};

export const Types = (args) => (
  <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end' }}>
    {options.types.map((type) => (
      <Button type={type} {...args} key={type} />
    ))}
  </div>
);
