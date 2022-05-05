// ----------------------------------------------------------------------

function pxToRem(value: number) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

const FONT_PRIMARY = `Mulish, sans-serif`;

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 800,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 28, md: 30, lg: 32 }),
  },
  h2: {
    fontWeight: 700,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 24, md: 26, lg: 28 }),
  },
  h3: {
    fontWeight: 700,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 22, lg: 24 }),
  },
  h4: {
    fontWeight: 700,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 16, md: 18, lg: 20 }),
  },
  h5: {
    fontWeight: 700,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 17, md: 18, lg: 18 }),
  },
  h6: {
    fontWeight: 700,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 16, md: 17, lg: 17 }),
  },
  subtitle1: {
    fontWeight: 600,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    fontSize: pxToRem(14),
  },
  body1: {
    fontSize: pxToRem(16),
  },
  body2: {
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: `uppercase`,
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: `capitalize`,
  },
};

export default typography;
