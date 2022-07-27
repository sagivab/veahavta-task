module.exports = {
  // mode: 'jit',
  // // These paths are just examples, customize them to match your project structure
  // purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      dark: 'black',
      light: 'white',
      primary: '#01559A',
      accent: '#D25C78',
      red: '#D25C78',
    },
    fontFamily: {
      body: ['"Assistant"', 'sans-serif'],
      display: ['"Assistant"', 'sans-serif'],
      sans: ['"Assistant"', 'sans-serif'],
      serif: ['"Assistant"', 'sans-serif'],
      mono: ['"Assistant"', 'sans-serif'],
    },
    extend: {
      colors: {
        'header-blue': '#4E47F9',

        'contact-bg': '#F4F3FD',
        'icon-bg': '#4E47F9',
        success: '#7AD17C',
        red: '#D25C78',
        blue: '#01559A',
        'brown-bg': '#E5E5E5',
        azure: '#E2F7F9',
        'hamburger-bg': '#E6E4FD',
        'banner-start': '#F4F3FD',
        'what-we-do-upper': '#F4F3FD',
        'banner-end': '#D3D1FC',
      },
      borderWidth: {
        1: '1px',
      },
      text: {
        medium: 'md:text-3xl',
        large: 'lg:text-2xl',
      },
      boxShadow: {
        '4xl': '0px 0px 4px rgba(0,0,0,0.25)',
      },
      maxWidth: {
        'content-xs': '330px',
        'content-sm': '360px',
        'content-md': '550px',
      },
      height: { header: '95px', banner: '780px', 'contact-us': '880px' },
      minHeight: {
        'screen-50': '50vh',
      },
      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr',
        'auto-1fr-auto': 'auto 1fr auto',
        'auto-auto-1fr': 'auto auto 1fr',
        '2-auto': 'auto auto',
        '4-auto': 'auto auto auto auto',
        '4-auto-1fr': 'auto auto auto auto 1fr',
      },

      gridTemplateRows: {
        '1fr': '1fr',
        'auto-1fr': 'auto 1fr',
      },
    },
  },
  plugins: [],
}
