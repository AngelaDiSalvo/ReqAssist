import { createMuiTheme } from 'material-ui/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default createMuiTheme({
  palette: {
    primary: '#e5e4ff',
    secondary: '#7b6d8d'
  },
  overrides: {
    MuiButton: {
      root: {
        color: 'white',
        '&:hover': {
          backgroundColor: 'purple'
        }
      }
    }
  }
});
