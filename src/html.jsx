import React from 'react'
import PropTypes from 'prop-types'
import { css, Global } from '@emotion/core'

const gatsby = css`
  background-color: var(--background-color);
  color: var(--primary-text-colour);
  transition: background-color 0.2s, color 0.2s;
`

const globalStyles = css`
  body {
    --gutter: 2rem;
    --background-color: #fafafa;
    --accent-colour: #00bcd4;
    --primary-text-colour: #222;

    font-size: 18px;
    font-family: 'Avenir Next', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 1.8;
    margin: 0;
    padding: 0;

    &.dark {
      --background-color: #222;
      --primary-text-colour: #f9f9f9;
    }
  }

  * {
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: inherit;
    }

    :focus {
      outline-color: var(--accent-colour);
    }
  }

  html,
  body,
  #___gatsby,
  #___gatsby > div {
    height: 100%;
  }

  h1 {
    margin: 0;
  }

  p {
    margin: 0;

    & + & {
      margin-top: 1em;
    }

    a {
      border-bottom: 2px solid;
      color: var(--accent-colour);
      font-weight: 500;
      text-decoration: none;
      transition: border-bottom-color ease-out 0.2s;

      &:hover,
      &:focus {
        border-bottom-color: transparent;
      }
    }
  }

  svg {
    display: block;
    fill: currentColor;
    width: 100%;
  }
`

export default function HTML({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) {
  return (
    <html lang="en-GB" {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="GbkERB2aLUOjt7IgBkrHpE61G7awq9zVYAu7ODXAfiA"
        />
        <meta name="author" content="Mike Simmonds" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        <Global styles={globalStyles} />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              var themeKey = 'theme', dark = 'dark', light = 'light';
              window.__onThemeChange = function() {};

              function setTheme(theme) {
                window.__theme = theme;
                preferredTheme = theme;
                document.body.className = theme;
                window.__onThemeChange(theme);
              }

              var systemIsDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');
              systemIsDarkQuery.addListener(function(event) {
                setTheme(event.matches ? dark : light);
              });

              var preferredTheme;
              try {
                preferredTheme = localStorage.getItem(themeKey);

                window.addEventListener('storage', function(event) {
                  if (event.isTrusted && event.key === themeKey && event.oldValue !== event.newValue) {
                    setTheme(event.newValue);
                  }
                });
              } catch (e) {}

              window.__saveTheme = function(theme) {
                setTheme(theme);

                try {
                  localStorage.setItem(themeKey, theme);
                } catch (e) {}
              };

              setTheme(preferredTheme || (systemIsDarkQuery.matches ? dark : light));
            })();
          `,
          }}
        />
        {preBodyComponents}
        <div
          key="body"
          css={gatsby}
          id="___gatsby"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  /* eslint-disable react/forbid-prop-types, react/require-default-props */
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
  /* eslint-enable react/forbid-prop-types, react/require-default-props */
}
