import { Route, Switch } from 'react-router';
import { LoginPage, LandingPage } from '../pages';

const AppRoutes = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default AppRoutes;
