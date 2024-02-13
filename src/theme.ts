'use client';
import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  palette: {
    primary: {
        main: '#DDE6ED'
    },
    secondary: {
        main: '#9DB2BF'
    },
    success: {
        main: '#526D82'
    },
    info: {
        main: '#27374D'
    }
  }
});

export default theme;