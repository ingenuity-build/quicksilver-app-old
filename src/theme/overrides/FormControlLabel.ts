// ----------------------------------------------------------------------

import { Theme } from '@mui/material';

export default function FormControlLabel(theme: Theme) {
  return {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: theme.typography.button.fontSize,
        },
      },
    },
  };
}
