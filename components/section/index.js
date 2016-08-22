import React, { PropTypes } from 'react'
import classes from 'classnames'

const Section = ({ className, contained, name, children }) =>
    <section className={classes('section', `section--${className}`,  { 'section--contained': !!contained })}>
        <header className="section__header">
            <h1 className="section__name">{name}</h1>
        </header>
        <div className="section__content">
            {children}
        </div>
    </section>

Section.propTypes = {
    className: PropTypes.string.isRequired,
    contained: PropTypes.bool.isRequired,
    children: PropTypes.any,
    name: PropTypes.string.isRequired
}

Section.defaultProps = {
    contained: false
}

export default Section
