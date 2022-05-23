import { red } from '@mui/material/colors';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import { createTheme } from '@mui/material/styles';
import Navbar from '../navbar/navbar';



export const dark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#b0bec5',
    },
    secondary: {
      main: '#595f65',
    },
    background: {
      default: '#595f65',
    },
    error: {
      main: red.A400,
    },
}
});


export default function EnableColorOnDarkNavbar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
 
        <AppBar position="static" color="primary" enableColorOnDark>
          {Navbar('enableColorOnDark')}
        </AppBar>
        <AppBar position="sticky" color="primary">
          {Navbar('default')}
        </AppBar>
    </Stack>
  );
}



