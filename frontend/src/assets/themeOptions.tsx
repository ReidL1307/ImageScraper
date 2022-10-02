import { createTheme } from '@mui/material/styles';


export const themeOptions = createTheme({
    typography: {
        fontFamily: [
            "'Bahnschrift SemiBold'",
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
  palette: {
    type: 'dark',
    primary: {
      main: '#3f3f3f',
        light: '#969696',

    },
    secondary: {
        main: '#5e0000',
    },
    background: {
      default: '#121212',
      paper: '#1c1b1b',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      hint: 'rgba(245,244,244,0.38)',
      secondary: 'rgba(185,185,185,0.84)',
      disabled: 'rgba(85,102,247,0.89)',
    },
    info: {
      main: '#4c4c4c',
    },
    info: {
      main: '#000000',
    },
  },
});