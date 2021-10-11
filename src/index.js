import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';

import './styles/tokens.css';
import './styles/globals.css';
import './styles/normalize.css';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
