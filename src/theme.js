import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({

  typography: {
    fontFamily: "Hind",
  },
  overrides: {
    MUIDataTable: {
      responsiveScroll: {
        maxHeight: '980px'
      }
    }
  }
});

export default theme;