import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { CssBaseline } from '@mui/material';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
 <>
  <CssBaseline />
  <App />
 </>,
);
