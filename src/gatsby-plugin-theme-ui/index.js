export default {
  colors: {
    text: "rgb(26, 26, 26)",
    background: "#fff",
    primary: "#639",
    secondary: 'rgb(148, 148, 148)',
    tertiary: 'rgb(228, 228, 228)',
  },
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Inter, system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 48, 64, 128, 256, 512],
  styles: {
    h1: {
      fontFamily: "body",
      lineHeight: 'heading',
      fontSize: 4,
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: 600,
    },
    h2: {
      fontFamily: "body",
      lineHeight: 'heading',
      fontSize: 3,
      marginTop: 6,
      marginBottom: 3,
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: 600,
    },
    h3: {
      fontFamily: "body",
      lineHeight: 'heading',
      fontSize: 2,
      marginTop: 5,
      marginBottom: 3,
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: 600,
    },
    p: {
      fontFamily: "body",
      lineHeight: 'body',
      fontSize: 2,
      marginTop: 3,
      marginBottom: 3,
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: 600,
    },
    ol: {
      padding: 0,
      marginTop: 3,
      marginBottom: 4,
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: 600,
    },
    ul: {
      padding: 0,
      marginTop: 3,
      marginBottom: 4,
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: 600,
    },
    li: {
      fontFamily: "body",
      fontSize: 2,
      marginBottom: 2,
      lineHeight: 'body',
    },
    figcaption: {
      fontFamily: "body",
      color: 'secondary',
      fontSize: 0,
    },
    blockquote: {
      'p': {
        borderLeft: '1px solid rgb(228, 228, 228)',
        paddingLeft: 3,
      },
    },
    a: {
      color: 'text',
      ':hover': {
        color: 'gray',
      },
    },
    pre: {
      marginTop: 4,
      marginBottom: 4,
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: 600,
    },
    figure: {
      marginBottom: 6,
    },
    '.footnotes': {
      backgroundColor: 'red',
      hr: {
        display: 'none',
      },
    },
  }
}
