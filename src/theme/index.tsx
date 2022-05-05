// material
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import shape from './shape';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';
import { WithChildren } from '../types/helpers';

// ----------------------------------------------------------------------

const themeOptions = {
  palette,
  shape,
  typography,
  breakpoints,
  shadows,
  customShadows,
};

const theme = createTheme(themeOptions as any);
theme.components = componentsOverride(theme);

export default function ThemeConfig({ children }: WithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export { theme };
