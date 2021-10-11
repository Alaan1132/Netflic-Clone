import { NavbarAuth } from '../components';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Layout/Navbar',
  component: NavbarAuth,
};

const Template = (args) => <NavbarAuth {...args} />;

export const LoginNavbar = Template.bind({});
LoginNavbar.args = {
  user: false,
};

export const EmptyNavbar = Template.bind({});
EmptyNavbar.decorators = [
  (Story) => <MemoryRouter initialEntries={['/login']}>{Story()}</MemoryRouter>,
];

export const SignUpNavbar = Template.bind({});
SignUpNavbar.args = {
  user: false,
};

SignUpNavbar.decorators = [
  (Story) => <MemoryRouter initialEntries={['/signUp']}>{Story()}</MemoryRouter>,
];
