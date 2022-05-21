import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

 export const dark = createTheme({
    type: 'dark',
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

});




