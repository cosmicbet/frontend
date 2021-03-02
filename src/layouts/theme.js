export default {
  breakpoints: [""],
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: "only screen",
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
  font: {
    base: "'DM Sans', sans-serif",
    headings: "'Montserrat', sans-serif",
  },
  fontSize: {
    base: 16,
    h1: 54,
    h2: 38,
    h3: 22,
    h4: 18,
    h5: 16,
  },
  fontWeight: {
    light: 200,
    base: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  colors: {
    primary: "#19154C",
    secondary: "#eaa065",
    tertiary: "#3F5FBF",
    dark: "#161426",
    accent: "#fdebd1",
    gray: "",
    success: "",
    warning: "#de5f17",
    danger: "#b7123e",
    black: "#000000",
    white: "#ffffff",
    odd: "#f1f1f1",
    muted: "",
  },
  transition: {
    base: "0.3s ease",
  },
};
