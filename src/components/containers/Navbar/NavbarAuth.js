import { useLocation } from 'react-router';
import { Dropdown, Link, Navbar, Picture } from '../../../components';
import { picturesSrc, routes } from '../../../constants';

export const NavbarAuth = ({ user }) => {
  const { pathname } = useLocation();

  return (
    <Navbar>
      <Navbar.InnerContainer>
        <Navbar.Primary>
          <Navbar.Logo>
            <Picture src={picturesSrc.logo} width="100%" />
          </Navbar.Logo>
        </Navbar.Primary>
        <Navbar.Secondary empty={pathname === '/login'}>
          {pathname === routes.home && <Dropdown />}
          <Link
            type={pathname === routes.home ? 'primary' : 'secondary'}
            to="/login"
            size="sm"
            children={user ? 'Cerrar sesion' : 'Iniciar sesion'}
          />
        </Navbar.Secondary>
      </Navbar.InnerContainer>
    </Navbar>
  );
};
