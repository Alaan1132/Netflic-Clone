import { Picture } from '../../components/atoms/Picture/Picture';
import { Navbar } from '../../components/layout/Navbar';
import { SelectLanguage } from '../../stories/Dropdown.stories';
import { SignUp } from '../../stories/Links.stories';

export const NavbarAuth = ({ user }) => {
  return (
    <Navbar>
      <Navbar.InnerContainer>
        <Navbar.Primary>
          <Navbar.Logo>
            <Picture
              src="https://res.cloudinary.com/desxpqy6n/image/upload/v1630518956/Netflix%20Clone/netflix-logo_kuii2i.png"
              width="100%"
            />
          </Navbar.Logo>
        </Navbar.Primary>
        <Navbar.Secondary>
          <SelectLanguage />
          <SignUp size="xs" type="primary" />
        </Navbar.Secondary>
      </Navbar.InnerContainer>
    </Navbar>
  );
};
