import { createTheme } from '@material-ui/core/styles';

const createThemeMode = isNightMode =>
  createTheme({
    palette: {
      type: isNightMode ? 'dark' : 'light',
      background: {
        default: isNightMode ? '#242332' : '#FDE7C2',
        paper: isNightMode ? '#606077' : '#F4D7AB',
        primary: isNightMode ? '#505067' : '#F4D7AB',
        secondary: isNightMode ? '#3B3A4D' : '#F4D7AB',
        extra: isNightMode ? '#242332' : '#F4D7AB',
        dark: isNightMode ? '#2B2A3D' : '#999',
        paused: isNightMode ? '#2B2A5A' : '#FCE57E',
        retired: isNightMode ? '#d32f2f' : '#e57373',
        hover: isNightMode ? '#2B2A3D' : '#EFE6DC',
        border: isNightMode ? '#2B2A3D' : '#DED9D5',
        overlay: isNightMode ? '#F4D7AB' : 'rgba(255, 255, 255, 0.75)',
      },
      primary: {
        main: isNightMode ? '#F4D7AB' : '#000',
      },
      secondary: {
        main: isNightMode ? '#F4D7AB' : '#F4D7AB',
      },
      text: {
        primary: isNightMode ? '#F4D7AB' : '#000',
        secondary: isNightMode ? '#B0B0DD' : '#00000066',
        flipped: isNightMode ? '#000' : '#F4D7AB',
      },
    },
    overrides: {
      MuiButton: {
        label: {
          color: isNightMode ? '#F4D7AB' : '#000',
        },
      },
      // for dropdown menu items
      MuiButtonBase: {
        root: {
          color: isNightMode ? '#F4D7AB' : '#000',
        },
      },
      MuiCheckbox: {
        colorPrimary: {
          color: isNightMode ? '#F4D7AB' : '#000',
        },
        colorSecondary: {
          color: isNightMode ? '#F4D7AB' : '#000',
        },
      },
    },
  });

export default createThemeMode;
