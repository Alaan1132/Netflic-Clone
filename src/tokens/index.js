const choices = {
  color: {
    brand: {
      kuCrimson: '#E50914',
      vividRed: '#F40612',
      fulvous: '#e87c03',
      brandeisBlue: '#0071eb',
      platinum: '#EAEAE6',
      philippineGray: '#8c8c8c',
      sonicSilver: '#757575',
      darkCharcoal: '#303030',
      raisinBlack: '#222222',
      colorGray: '#e6e6e6',
    },
    base: {
      dark: '#000000',
      white: '#ffffff',
      transparent: 'transparent',
    },
    yellow: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#FFB53F',
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
    },
  },
  spacing: {
    none: 0,
    xs: 5,
    sm: 15,
    md: 20,
    lg: 40,
  },
  gap: {
    none: 0,
    xs: '.2rem',
    sm: '.4rem',
    md: '.8rem',
    lg: '1rem',
  },
  padding: {
    base: '10px',
    xs: '1.2rem',
    sm: '1.4rem',
    md: '1.6rem',
    lg: '1.8rem',
    xl: '2.2rem',
  },
  fontFamily: {
    sans: ['Helvetica', 'Arial', 'sans-serif'],
  },
  fontSize: {
    base: '62.5%',
    xs: '1.4rem',
    sm: '1.6rem',
    md: '1.8rem',
    lg: '2.2rem',
    xl: '2.6rem',
  },
  fontWeight: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  borderRadius: {
    none: '0',
    xs: '2px',
    sm: '4px',
    md: '6px',
    lg: '8px',
    full: '9999px',
  },
};

const decisions = {
  color: {
    primary: choices.color.brand.kuCrimson,
    primaryHiglight: choices.color.brand.vividRed,
    fontBase: choices.color.base.dark,
    fontBaseMuted: choices.color.brand.philippineGray,
    fontBaseInverted: choices.color.base.white,
    secondary: choices.color.brand.brandeisBlue,
    transparent: choices.color.base.transparent,
    tertiary: choices.color.brand.brandeisBlue,
  },
  backgroundColor: {
    primary: choices.color.base.dark,
    secondary: choices.color.base.white,
  },
};

module.exports = { choices, decisions };
