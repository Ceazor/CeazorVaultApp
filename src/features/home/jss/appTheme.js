import { createTheme } from '@material-ui/core/styles';

const createThemeMode = isNightMode =>
  createTheme({
    palette: {
      type: isNightMode ? 'dark' : 'light',
      background: {
        default: isNightMode ? '#242332' : '#FBE9C5',
        paper: isNightMode ? '#606077' : '#F4E2C2',
        primary: isNightMode ? '#505067' : '#F4E2C2',
        secondary: isNightMode ? '#3B3A4D' : '#F4E2C2',
        extra: isNightMode ? '#242332' : '#F4E2C2',
        dark: isNightMode ? '#2B2A3D' : '#999',
        paused: isNightMode ? '#2B2A5A' : '#FCE57E',
        retired: isNightMode ? '#d32f2f' : '#e57373',
        hover: isNightMode ? '#2B2A3D' : '#EFE6DC',
        border: isNightMode ? '#2B2A3D' : '#DED9D5',
        overlay: isNightMode ? '#F4E2C2' : 'rgba(255, 255, 255, 0.75)',
      },
      primary: {
        main: isNightMode ? '#F4E2C2' : '#000',
      },
      secondary: {
        main: isNightMode ? '#F4E2C2' : '#F4E2C2',
      },
      text: {
        primary: isNightMode ? '#F4E2C2' : '#000',
        secondary: isNightMode ? '#B0B0DD' : '#00000066',
        flipped: isNightMode ? '#000' : '#F4E2C2',
      },
    },
    overrides: {
      MuiButton: {
        label: {
          color: isNightMode ? '#F4E2C2' : '#000',
        },
      },
      // for dropdown menu items
      MuiButtonBase: {
        root: {
          color: isNightMode ? '#F4E2C2' : '#000',
        },
      },
      MuiCheckbox: {
        colorPrimary: {
          color: isNightMode ? '#F4E2C2' : '#000',
        },
        colorSecondary: {
          color: isNightMode ? '#F4E2C2' : '#000',
        },
      },
    },
  });

export default createThemeMode;
