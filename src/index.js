import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { ThemeProvider } from '@mui/material/styles';
import { dark } from './components/themes/dark';
import { light } from './components/themes/light';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={dark || light}>
      <CssBaseline />
      <App />
  </ThemeProvider>
);

