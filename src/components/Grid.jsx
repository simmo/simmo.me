import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

const grid = css`
  display: grid;
  grid-gap: var(--gutter);
  grid-template-columns:
    [full-start] minmax(0, 1fr)
    [main-start] minmax(0, 1280px) [main-end]
    minmax(0, 1fr) [full-end];
  min-height: 100%;

  & > * {
    grid-column: main;
    padding: var(--gutter) 0;
  }

  & > .full {
    grid-column: full;
  }
`

export default function Grid({ as: Element, children }) {
  return <Element css={grid}>{children}</Element>
}

Grid.defaultProps = {
  as: 'div',
  children: null,
}

Grid.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
}
