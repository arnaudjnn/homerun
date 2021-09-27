import Container from './components/container';
import colors from './foundations/colors';

export const theme = {
  fonts: {
    body: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Manrope", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "56px",
    "7xl": "64px",
  },
  colors,
  components: {
    Container
  },
  styles: {
    global: {
      body: {
        bg: 'brown.50',
        color: '#1B1B1A',
        lineHeight: 1.7,
        fontSize: {
          base: 'lg',
          lg: 'xl'
        },
      }
    }
  }
}