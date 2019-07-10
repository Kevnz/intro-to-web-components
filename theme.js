
import React from 'react'

const yellow = '#FFD500'
const baseTheme = {
  font: 'system-ui, sans-serif',
  monospace: 'Menlo, monospace',

  colors: {
    text: '#000',
    background: 'white',
    link: '#07c',
    pre: '#f0f',
    preBackground: '#333',
    code: '#f0f',
  },
  css: {
    fontSize: '16px',
    textAlign: 'center',
    '@media screen and (min-width:56em)': {
      // fontSize: '32px',
    },
    '@media screen and (min-width:64em)': {
      // fontSize: '48px',
    },
    '@media print': {
      fontSize: '40px',
    },
    'li > p': {
      margin: 0,
    },
  },
  pre: {
    textAlign: 'left',
    fontSize: '22px',
  },
  ol: {
    textAlign: 'left',
  },
  ul: {
    textAlign: 'left',
  },
}
const theme = {
  ...baseTheme,
  font: '"Roboto Condensed", system-ui, sans-serif',
  weights: [400, 700],
  monospace: '"Roboto Mono", monospace',
  googleFont:
    'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto+Mono',
  colors: {
    text: '#0D1117',
    background: yellow,
    link: '#333',
    pre: yellow,
    preBackground: '#0D1117',
    code: yellow,
    codeBackground: '#0D1117',
  },
  heading: {
    fontWeight: 'normal',
    fontSize: 72,


  },
  blockquote: {
    fontWeight: 700,
  },
  pre: {
    textAlign: 'left',
  },
  svg: {
    margin: '30px',
  },
  Slide: {
    // borderLeft: '1px solid #0D1117',
    '& svg': {
      margin: '50px',
    },
  },
  css: {
    '#root': {
      border: '20px solid black',
    }
  }
}
const Provider = props => (
  <div>
    {props.children}
    <div
      css={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        margin: 16,
      }}
    >
      <a href="https://kevinisom.info" css={{
        color: '#0D1117',
        textDecoration: 'none',
        '&:hover': {
          color: '#0D1117',
        }
      }}>Kevin Isom</a>
    </div>
  </div>
)

export default {
  Provider,
  ...theme
}