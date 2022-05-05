import palette from '../theme/palette';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
        shape: {
            borderRadiuses: {
                sm: number;
                md: number;
                lg: number;
            };
        };
    }

    interface Palette {
        gradients: typeof palette['gradients'];
    }

    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        light: true;
    }
}

export {};
