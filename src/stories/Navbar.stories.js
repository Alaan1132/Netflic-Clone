import React from 'react';

import { Navbar, Picture } from '../components';
import { SignUp } from './Links.stories';
import { SelectLanguage } from './Dropdown.stories';
import utilStyles from '../utils/tools-styles.module.css';

export default {
  title: 'Layout/Navbar',
  component: Navbar,
  args: {},
};

export const NavLandingPage = (args) => (
  <Navbar {...args}>
    <Navbar.InnerContainer>
      <Navbar.Primary>
        <Navbar.Logo>
          <Picture
            src="https://res.cloudinary.com/desxpqy6n/image/upload/v1630518956/Netflix%20Clone/netflix-logo_kuii2i.png"
            width="100%"
            {...Picture.args}
          />
        </Navbar.Logo>
      </Navbar.Primary>
      <Navbar.Secondary>
        <SelectLanguage {...SelectLanguage.args} />
        <SignUp size="xs" type="primary" {...SignUp.args} />
      </Navbar.Secondary>
    </Navbar.InnerContainer>
  </Navbar>
);

export const SignupNavbar = (args) => {
  return (
    <Navbar className={utilStyles['border--bottom']} {...args}>
      <Navbar.InnerContainer>
        <Navbar.Primary>
          <Navbar.Logo>
            <Picture
              src="https://res.cloudinary.com/desxpqy6n/image/upload/v1630518956/Netflix%20Clone/netflix-logo_kuii2i.png"
              width="100%"
              {...Picture.args}
            />
          </Navbar.Logo>
        </Navbar.Primary>
        <Navbar.Secondary>
          <SignUp size="xs" type="secondary" {...SignUp.args}>
            Cerrar sesion
          </SignUp>
        </Navbar.Secondary>
      </Navbar.InnerContainer>
    </Navbar>
  );
};
