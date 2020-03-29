export default {
  colors: {
    text: "rgb(26, 26, 26)",
    background: "#fff",
    primary: "#639",
    secondary: 'rgb(228, 228, 228)',
  },
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Inter, system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 400,
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
      fontSize: 4,
      fontWeight: "body",
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: 600,
    },
    p: {
      fontFamily: "body",
      fontSize: 2,
      marginTop: 4,
      marginBottom: 3,
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: 600,
      img: {
        position: 'relative',
        display: 'block',
        marginRight: -200,
      },
    },
    ol: {
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: 600,
    },
    ul: {
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: 600,
    },
    li: {
      fontFamily: "body",
      fontSize: 2,
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
        color: 'red',
      },
    },
  }
}
