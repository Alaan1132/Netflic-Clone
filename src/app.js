import { NavbarAuth } from './components';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <div style={{ width: '95%', margin: '0 auto' }}>
      <NavbarAuth />
      <AppRoutes />
    </div>
  );
};

export default App;
